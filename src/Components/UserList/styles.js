import styled from "styled-components";


export const UserButton = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 5px;
    background-color: white;
    border: none;
    text-align: left;
    transition: 1s all;
    font-size: 1.1rem;

    &:hover {
        padding-left: 10%;
    }

`

export const Wrapper = styled.div`
    width: 100%;
    height: 40px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1300px) {
        margin: 20px;
    }

    @media (min-width: 1920px) {
        margin: 20px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 4px 5px 22px -2px rgba(105,105,105,0.64);
    width: 100%;
    padding: 10px 30px;
    box-sizing: border-box;
    height: 100%;
    backdrop-filter: blur(10px);

    .user__list {
        padding: 0px 20px;
        list-style-type: none;
        overflow-y: scroll;
        width: 100%;
    }

    @media (min-width: 1300px) {
        width: 400px;
        padding: 10px 50px;
    }

    @media (min-width: 1920px) {
        width: 400px;
        padding: 10px 50px;
    }


`