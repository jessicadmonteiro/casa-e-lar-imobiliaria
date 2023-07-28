import { Input } from "../../componentes/Input"
import { ContainerForm, Form } from "../../styles/form"
import { Header } from "../../componentes/Header"

export const Login = () => {
    return (
        <>
            <Header
                button1="Home"
                button2="Catastrar"
                page1="/"
                page2="/register"
            />
            <ContainerForm>
                <h1>Login</h1>
                <Form>

                        <Input label ="E-mail" type="email" id="email" placeholder="Digite seu email"/>

                        <Input label="Senha" type="passaword" id="password" placeholder="Digite sua senha"/>

                        <p>Esqueci minha senha</p>
                        
                        <button type="submit">Entrar</button>
                </Form>
            </ContainerForm>
        </>
    )
}