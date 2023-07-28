import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Adverts } from "../pages/Adverts"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"

export const RoutesMain = () => {
    return (
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adverts" element={<Adverts/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
       </Routes>
    )
}