import React, { createContext, ReactNode, useContext, useState } from 'react';
import { GetUserByToken, TokenAuthUser } from '../service/api-dogs';

type User = {
  username: string;
  password: string
}
interface UserContextProps {
  userLogin: (user: User) => void
}

export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: any) {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getUser(token: string) {
    const { url, options } = GetUserByToken(token)
    const response = await fetch(url, options)
    const user = await response.json()
    setData(user)
    setLogin(true)
  }

  async function userLogin({ username, password }: User) {
    const { url, options } = TokenAuthUser({ username, password })
    const tokenRes = await fetch(url, options)
    const { token } = await tokenRes.json()
    window.localStorage.setItem("dogs@userToken", token)

    getUser(token)
  }

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  )
}
export function useUserContext() {
  return useContext(UserContext);
}
