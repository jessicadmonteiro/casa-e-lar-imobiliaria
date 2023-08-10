import styled from "styled-components"

export const Title = styled.h2`
    width: 90vw;
    margin: 50px auto 0 auto;

    font-size: 20px;

    color: var(--color-grey-1);
`

export const Ul = styled.ul`
    width: 90vw;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row; 
    gap: 20px;

    overflow-x: auto;
    margin: 50px auto 0 auto;

    li {
        min-width: 260px;
        max-width: 260px;

        border: 1px solid var(--color-grey-5);
        border-radius: 10px;

        padding: 12px;

        span {
            display: flex;
            gap: 15px;
            align-items: center;

            margin-bottom: 10px;
        }

        div {
            width: 30px;
            height: 30px;

            display: flex;
            justify-content: center;
            align-items: center;

            font-family: var(--font-lexend);

            color: var(--color-grey-7);
            background-color: var(--color-brand2);
            border-radius: 50%;
        }

        p,
        h4 {
            font-family: var(--font-lexend);
            color: var(--color-grey-1);
        }

        h4 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
            font-weight: 400;
           
        }
    }
` 