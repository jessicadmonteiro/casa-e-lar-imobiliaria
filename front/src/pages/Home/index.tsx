import { Adverts } from "../../componentes/Adverts"
import { Header } from "../../componentes/Header"
import { ContainerCover } from "./style"

export const Home = () => {
    return (
        <>
            <Header/>
            <ContainerCover>
                <h1>Encontre o imovel do seus sonhos</h1>
            </ContainerCover>
            <Adverts/>
        </>
    )
}