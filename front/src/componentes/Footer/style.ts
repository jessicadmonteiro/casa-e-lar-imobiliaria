import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
    margin-top: 30px;
    background-color: var(--color-grey-6);

    img {
        width: 100px;
    }

    button {
        width: 30px;
        height: 30px;

        color: var(--color-grey-7);
        background-color: var(--color-brand1);
        border: transparent;
        border-radius: 4px;
    }

    #container-links-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        p {
            font-size: 11px;
            margin-top: 10px;
        }
    }
`;

export const LinkFooter = styled(Link)`
    font-size: 11px;
    padding: 5px;
    color: var(--color-brand3);
`;
