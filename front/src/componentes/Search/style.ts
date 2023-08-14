import styled from "styled-components";

export const FormSearch = styled.form`
    margin: 50px 10px 30px 70px;

    input {
        width: 200px;
        height: 25px;

        padding-left: 10px;
        border: 1px solid var(--color-grey-4);
        border-radius: 4px;

        outline: none;

        &:focus {
            border-color: var(--color-brand1);
            box-shadow: 0 0 5px var(--color-grey-5);
        }
    }

    button {
        width: 55px;
        height: 25px;
    }

    input::placeholder {
        font-size: 14px;
        color: var(--color-brand1);
        padding-left: 10px;
    }

    @media (max-width: 400px) {
        margin-left: 20px;
        input {
            width: 150px;
        }
    }
`;
