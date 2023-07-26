import styled from "styled-components"

export const Container = styled.div`
    width: 300px;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: solid 1px;
    border-radius: 10px;
`
export const LoginForm = styled.form`

    label {
        font-size: 0.60rem;
        margin: 10px 0 5px 0;
    }

    input {
        width: 95%;
        display: flex;
        flex-direction: column;
        height: 20px;
    }

    
    input::placeholder {
        font-size: 0.55rem;
        padding-left: 10px;
    }

    p {
        font-size: 0.60rem;
        text-align: right;
    }

    button {
        width: 100%;
        height: 25px;
        font-size: 0.60rem;
    }
`