import styled from "styled-components"

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;

    img {
        position: relative;
        width: 90%;
        height: 90%;
        bottom: 0%;
    }

    h1 {
        font-size: 3.5rem;
        margin: 30% 0px 0px 0px;
    }

    svg {
        position: absolute;
        font-size: 3rem;
        color: grey;
        right: 30px;
        top: 10px;
    }

    @media (min-width: 1300px) {
        width: 500px;
        height: 500px;
        padding: 10px 50px;
        border-radius: 15px;
        box-shadow: 4px 5px 22px -2px rgba(105,105,105,0.64);

        h1 {
            font-size: 3.5rem;
            margin: 30px 0px;
        }

        svg {
            position: absolute;
            font-size: 2rem;
            color: grey;
            right: 30px;
            top: 10px;
    }

    }

    @media (min-width: 1920px) {
        width: 800px;
        height: 800px;
        padding: 10px 50px;
        border-radius: 15px;
        box-shadow: 4px 5px 22px -2px rgba(105,105,105,0.64);

        h1 {
            font-size: 3.5rem;
        }

        svg {
            position: absolute;
            font-size: 2rem;
            color: grey;
            right: 30px;
            top: 10px;
    }

    }
`    