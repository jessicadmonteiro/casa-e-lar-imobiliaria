import { ContainerHeader } from "./style"
import Logo from "../../assets/logo.png"

export const Header = () => {
    return (
        <>
            <ContainerHeader>
                <img src={Logo} alt="Logo" />
            </ContainerHeader>
        </>
    )
}