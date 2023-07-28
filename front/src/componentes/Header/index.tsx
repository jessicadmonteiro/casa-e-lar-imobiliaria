import { ContainerHeader, LinkStylendMenu, CloseButton, LinkDesktop } from "./style"
import Logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { IHeaderProps } from "../../interfaces/Header"
import { useState } from "react"
import Menu from "../../assets/menu.png"

export const Header = (props: IHeaderProps) => {

    const navigate = useNavigate()
    const [showButtons, setShowButtons] = useState(false)

    const toggleButtons = () => {
        setShowButtons(!showButtons)
    }

    return (
        <>
            <ContainerHeader>
                <img id="img-logo" onClick={() => navigate("/")} src={Logo} alt="Logo" />
                <div id="container-menu">
                    {
                        showButtons ? (
                            <div id="container-links-menu">
                                <LinkStylendMenu id="link-menu" to={props.page1}>{props.button1}</LinkStylendMenu>
                                <LinkStylendMenu id="link-menu" to={props.page2}>{props.button2}</LinkStylendMenu>
                                <CloseButton onClick={toggleButtons}>X</CloseButton>
                            </div>
                        ) : (
                            <img id="img-menu" src={Menu} alt="Menu" onClick={toggleButtons}/>
                        )
                    }
                </div>
                <div id="container-link-desktop">
                    <LinkDesktop to={props.page1}>{props.button1}</LinkDesktop>
                    <LinkDesktop to={props.page2}>{props.button2}</LinkDesktop>
                </div>
            </ContainerHeader>
        </>
    )
}