import { FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { useForm } from "../../hooks/useForm";
import { GetUserByToken, TokenAuthUser } from "../../service/api-dogs";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input";


export function LoginForm() {
  const username = useForm('username');
  const password = useForm('password');
  const { userLogin } = useUserContext()
   
  useEffect(() => {
    const token = window.localStorage.getItem("dogs@userToken")
    if (token) getUser(token)
  }, [])

  async function getUser(token: string) {
    const { url, options } = GetUserByToken(token)
    const response = await fetch(url, options)
    const user = await response.json()
    console.log(user)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const {
        url,
        options
      } = TokenAuthUser({ username: username.value, password: password.value })
      const response = await fetch(url, options)
      const data = await response.json()
      window.localStorage.setItem('dogs@userToken', data.token)
      getUser(data.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          {...username}
          label="Usuário"
          type='text'
          name='username'
          error={username.error}
        />
        <Input
          {...password}
          label="Senha"
          type='password'
          name='password'
          error={password.error}
        />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}