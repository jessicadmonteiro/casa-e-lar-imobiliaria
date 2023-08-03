import styled from "styled-components"

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

        font-size:( var--font-lexend);

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

`