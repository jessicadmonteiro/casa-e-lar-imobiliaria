import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
    width: 100vw;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px 20px;
    border-bottom: solid 1px var(--color-grey-4);
    box-shadow: 1px 1px var(--color-grey-5);

    #container-menu {
        @media (max-width: 650px) {
            display: flex;
            justify-content: flex-end;
        }
    }

    #img-logo {
        width: 200px;

        @media (max-width: 500px) {
            width: 150px;
        }
    }

    #img-menu {
        width: 40px;
        height: 25px;
        padding-right: 2vw;

        cursor: pointer;

        @media (min-width: 650px) {
            display: none;
        }
    }

    #container-links-menu {
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column;

        position: absolute;
        top: 78px;
        bottom: 0;
        right: 0;
        z-index: 2;

        padding: 10px;

        background-color: var(--color-grey-10);

        @media (min-width: 650px) {
            display: none;
        }
    }

    #link-menu {
        font-size: 12px;
        font-family: var(--font-inter);
        font-weight: 500;
        text-decoration: none;

        color: var(--color-grey-2);
        padding: 5px;
        margin-bottom: 20px;
    }

    #container-link-desktop {
        display: flex;
        gap: 20px;
        align-items: center;

        @media (max-width: 649px) {
            display: none;
            button {
                display: none;
            }
        }
    }
`;

export const LinkStylendMenu = styled(Link)`
    width: 100px;
    height: 35px;
    text-align: center;

    font-size: 14px;
    font-family: var(--font-inter);
    text-decoration: none;

    box-shadow: 0 1px var(--color-grey-7);
`;

export const LinkDesktop = styled(Link)`
    font-size: 14px;
    color: var(--color-brand3);
`;

export const CloseButton = styled.button`
    font-size: 13px;
    font-weight: 400;
    font-family: var(--font-lexend);

    position: absolute;
    top: -47px;
    right: 35px;

    color: var(--color-grey-2);
    background-color: transparent;
    border: none;
`;
