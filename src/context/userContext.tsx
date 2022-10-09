import React, { createContext, useContext, useState } from 'react';
import { GetUserByToken, TokenAuthUser } from '../service/api-dogs';

type User = {
  username: string;
  email: string
}

type Data = {
  username: string;
  password: string
}
interface UserContextProps {
  userLogin: (user: Data) => void
  user: User
}

export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: any) {
  const [user, setUser] = useState<User>({} as User)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getUser(token: string) {
    const { url, options } = GetUserByToken(token)
    const response = await fetch(url, options)
    const userRes = await response.json()
    setUser(userRes)
    setLogin(true)
  }

  async function userLogin({ username, password }: Data) {
    const { url, options } = TokenAuthUser({ username, password })
    const tokenRes = await fetch(url, options)
    const { token } = await tokenRes.json()
    window.localStorage.setItem("dogs@userToken", token)

    getUser(token)
  }

  return (
    <UserContext.Provider value={{ userLogin, user }}>
      {children}
    </UserContext.Provider>
  )
}
export function useUserContext() {
  return useContext(UserContext);
}
