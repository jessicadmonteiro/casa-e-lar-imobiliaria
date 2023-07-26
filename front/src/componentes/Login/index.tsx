import { Input } from "../Input"
import { Container, LoginForm } from "./style"

export const Login = () => {
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm>

                    <Input label ="E-mail" type="email" id="email" placeholder="Digite seu email"/>

                    <Input label="Senha" type="passaword" id="password" placeholder="Digite sua senha"/>

                    <p>Esqueci minha senha</p>
                    
                    <button type="submit">Entrar</button>
            </LoginForm>
        </Container>
    )
}