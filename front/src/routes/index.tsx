import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Adverts } from "../pages/Adverts"

export const RoutesMain = () => {
    return (
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adverts" element={<Adverts/>}/>
       </Routes>
    )
}