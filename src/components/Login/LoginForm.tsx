import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { useForm } from "../../hooks/useForm";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input";


export function LoginForm() {
  const username = useForm('username');
  const password = useForm('password');
  const { userLogin } = useUserContext()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin({ username: username.value, password: password.value })
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