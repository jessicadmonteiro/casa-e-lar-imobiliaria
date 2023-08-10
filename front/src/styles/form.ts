import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 300px;
    margin: auto;
    margin-top: 50px;

    border: solid 1px var(--color-brand1);
    border-radius: 10px;
    padding: 10px;

    h1 {
        color: var(--color-brand1);
        margin: 10px 0 20px 0;
    }

    button {
        width: 100%;
        height: 40px;
        background-color: var(--color-brand1);
        color: var(--color-whiteFixed);

        border: transparent;
        border-radius: 4px;
        margin: 20px 0 15px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    label {
        color: var(--color-grey-3);
        margin: 10px 0 5px 0;
    }

    input {
        width: 280px;
        height: 30px;

        border: solid 1px var(--color-brand1);
        border-radius: 4px;
        margin-top: 4px;
    }

    input::placeholder {
        padding-left: 10px;
        color: var(--color-grey-3);
    }

    p {
        text-align: right;
    }
`;
