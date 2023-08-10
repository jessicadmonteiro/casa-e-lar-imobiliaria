import { Footer } from "../../componentes/Footer";
import { Header } from "../../componentes/Header";
import { Input } from "../../componentes/Input";
import { Container } from "../../styles/container";
import { ContainerForm, Form } from "../../styles/form";

export const Register = () => {
    return (
        <>
            <Header button1="Home" button2="Login" page1="/" page2="/login" />
            <Container>
                <ContainerForm>
                    <h1>Cadastro</h1>
                    <Form>
                        <Input
                            type="text"
                            label="Nome"
                            placeholder="Digite seu nome"
                        />

                        <Input
                            type="email"
                            label="Email"
                            placeholder="Digite seu email"
                        />

                        <Input label="Senha" placeholder="Digite sua senha" />

                        <Input
                            label="Confirmar senha"
                            placeholder="Digite sua senha"
                        />

                        <button type="submit">Cadastrar</button>
                    </Form>
                </ContainerForm>
            </Container>
            <Footer />
        </>
    );
};
