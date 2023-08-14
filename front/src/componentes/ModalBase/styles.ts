import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;

    background-color: rgba(0, 0, 0, 0.5);

    > div {
        min-width: 300px;
        position: relative;

        background-color: var(--color-gray-2);
        border-radius: 4px;
        box-shadow: 0 0 2.5rem 0 rgba(0, 0, 0, 0.25);

        padding: 22px;

        li {
            width: 100%;
            height: 100%;

            figure {
                min-width: 250px;
                height: 450px;

                img {
                    width: 400px;
                    height: 450px;

                    border-radius: 4px;

                    :hover {
                        zoom: 150%;
                    }
                }

                @media (max-width: 565px) {
                    height: 350px;

                    img {
                        width: 300px;
                        height: 350px;
                    }
                }
            }
        }
    }
`;

export const ContainerButtons = styled.div`
    width: 97%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 210px;
    left: 7px;

    button {
        width: 45px;
        height: 45px;

        border-radius: 50%;
        border: 5px solid rgba(0, 0, 0, 0.25);

        color: var(--color-grey-5);
        background-color: rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 565px) {
        top: 190px;
    }
`;
