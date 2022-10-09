import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"

import "./App.css"
import { UserContextProvider } from "./context/userContext"

function App() {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
