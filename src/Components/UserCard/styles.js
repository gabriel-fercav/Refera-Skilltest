import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
    border-radius: 15px;
    box-shadow: 4px 5px 22px -2px rgba(105,105,105,0.64);
    width: 100%;
    height: 100%;
    padding: 10px 30px;
    box-sizing: border-box;
    backdrop-filter: blur(10px);

    span {
        font-weight: bolder;
    }

    p {
        margin-bottom: 3px;
    }

    .user__name {
        font-size: 1.3rem;
        width: 100%;
        padding-bottom: 15px;
        margin-bottom: 10px;
        border-bottom: 1px solid lightgray;
    }

    @media (min-width: 1300px) {
        width: 50vw;
        height: 80vh;
        padding: 10px 50px;

        p {
            margin-bottom: 5px; 
        }

        .user__name {
            font-size: 1.4rem;
            margin-bottom: 15px;
        }
    }

    @media (min-width: 1920px) {
        width: 40vw;
        height: 50vh;
        padding: 10px 50px;

        p {
            margin-bottom: 5px; 
        }

        .user__name {
            font-size: 1.4rem;
            margin-bottom: 15px;
        }
    }
`    
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;

`
export const NotFound = styled.img`
    width: 60%;
    height: 60%;
`