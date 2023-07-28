import { Adverts } from "../../componentes/Adverts"
import { Footer } from "../../componentes/Footer"
import { Header } from "../../componentes/Header"
import { Search } from "../../componentes/Search"
import { Container } from "../../styles/container"
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
            <Container>
                <ContainerCover>
                    <h1>Enconte o lar dos seus sonhos, onde o futuro se constrói e as memórias ganham vida.</h1>
                </ContainerCover>
                <Search/>
                <Adverts/>
            </Container>
            <Footer/>
        </>
    )
}