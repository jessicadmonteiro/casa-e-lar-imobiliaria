import { Adverts } from "../../componentes/Adverts"
import { Header } from "../../componentes/Header"
import { Search } from "../../componentes/Search"
import { ContainerCover } from "./style"

export const Home = () => {
    return (
        <>
            <Header 
                button1="Fazer Login" 
                button2="Cadastrar" 
                page1="/login"
                page2="register"
            />
            
            <ContainerCover>
                <h1>Enconte o lar dos seus sonhos, onde o futuro se constrói e as memórias ganham vida.</h1>
            </ContainerCover>
            <Search/>
            <Adverts/>
        </>
    )
}