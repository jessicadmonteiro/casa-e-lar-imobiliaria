import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 20px;

        color: var(--color-grey-1);
        margin-bottom: 5px;
    }

    ul {
        display: flex;
        flex-direction: column;

        button {
            text-align: left;
            font-size: 15px;
            font-family: var(--font-lexend);

            background-color: transparent;
            border: transparent;
        }

        button:focus {
            border-bottom: 1px solid var(--color-brand1);
        }
    }
`;
