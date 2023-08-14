import styled from "styled-components";

export const ContainerSpecificAd = styled.div`
    #main-image {
        width: 90%;
        display: flex;
        align-items: center;
        gap: 20px;
        margin: 20px auto;
        overflow-x: auto;

        figure {
            min-width: 300px;
            height: 350px;
            display: flex;

            overflow: hidden;
            margin: auto;

            border-radius: 5px;

            img {
                width: 350px;
                transition: 0.8s ease;
                object-fit: cover;
            }

            img:hover {
                transform: scale(1.1);
            }
        }
    }

    aside {
        width: 87%;
        margin: auto;

        font-size: (var--font-lexend);

        h3 {
            font-size: 16px;
        }

        #description {
            font-size: 14px;
            margin: 10px;
        }

        #property-details {
            font-size: 13px;
            margin: 0 10px;
        }
    }

    #container-button-schedule {
        width: 120px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-brand1);
        border-radius: 4px;

        margin: 20px 7%;

        @media(max-width: 768px){
            margin: 20px 8%;
        }

        #link-schedule {
            font-size: 14px;
            color: var(--color-grey-9);

            transition: 1s;
        }

        #link-schedule:hover {
            color: var(--color-brand2);
            transition: 1s;
        }
    }
`;
