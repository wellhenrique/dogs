import { Route, Routes } from "react-router-dom";

import { LoginForm } from "../components/Login/LoginForm";
import { LoginCreate } from "../components/Login/LoginCreate";
import { LoginPasswordLost } from "../components/Login/LoginPasswordLost";
import { LoginPasswordReset } from "../components/Login/LoginPasswordReset";

export function Login() {

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<LoginCreate />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
      <Route path="resetar" element={<LoginPasswordReset />} />
    </Routes>
  )
}