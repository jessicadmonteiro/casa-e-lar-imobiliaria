import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo footer.png";
import { FooterContainer, LinkFooter } from "./style";

export const Footer = () => {
    const navigate = useNavigate();

    const ScrollToTopButton = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };

    return (
        <>
            <FooterContainer>
                <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
                <div id="container-links-text">
                    <div>
                        <LinkFooter to={"/"}> Sobre Nós</LinkFooter>
                        <LinkFooter to={"/"}>Contatos</LinkFooter>
                    </div>
                    <p>© 2009 - Todos os direitos reservador.</p>
                </div>
                <button onClick={ScrollToTopButton}>^</button>
            </FooterContainer>
        </>
    );
};
