import styled from "styled-components";

export const Ul = styled.ul`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin-top: 20px;

    li {
        width: 260px;
        height: 310px;
        display: flex;
        flex-direction: column;

        border: 0.5px solid var(--color-brand1);
        border-radius: 10px;
        box-shadow: 1px 1px var(--color-grey-6);

        figure {
            height: 190px;
            display: flex;
            align-items: center;
            justify-content: center;

            overflow: hidden;

            background-color: var(--color-brand1);

            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            img {
                width: 260px;
                transition: 0.8s ease;
                object-fit: cover;
            }

            img:hover {
                transform: scale(1.1);
            }
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 10px;

            h4 {
                font-size: 1.1rem;
            }

            button {
                height: 25px;
                margin-top: 15px;
                font-size: 1.1rem;

                color: var(--color-brand2);
                background-color: transparent;
                border: solid 1px;
                transition: 1s ease;
            }

            button:hover {
                background-color: var(--color-brand2);
                color: var(--color-whiteFixed);

                transition: 1.5s ease;
            }
        }
    }

    #container-search-not-found {
        width: 90vw;
        text-align: center;

        h2 {
            color: var(--color-grey-2);
        }
    }

    @media (max-width: 729px) {
        flex-wrap: nowrap;
        flex-direction: row;

        overflow-x: auto;
    }
`;
