import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100vw;
    height: 100vh;
    padding: 10px 30px;
    box-sizing: border-box;

    .user__form {
        width: 100%;
    }

    @media (min-width: 1300px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: white;
        border-radius: 15px;
        box-shadow: 4px 5px 22px -2px rgba(105,105,105,0.64);
        width: 40%;
        height: 100%;
        padding: 30px 30px;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        overflow: auto;
    }

    @media (min-width: 1920px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 15px;
        box-shadow: 4px 5px 22px -2px rgba(105,105,105,0.64);
        width: 30%;
        height: 80%;
        padding: 10px 30px;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
    }
`

export const ButtonWrapper = styled.div`
    height: 40px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;

    @media (min-width: 1300px) {
        margin-top: 30px;
    }

    @media (min-width: 1920px) {
        margin-top: 30px;
    }
`

export const Register = styled.input`
    width: 90%;
    height: 40px;
    border: none;
    border-bottom: 1px solid lightgray;

    @media (min-width: 1300px) {
        margin: 5px;
    }

    @media (min-width: 1920px) {
        margin: 5px;
    }
`