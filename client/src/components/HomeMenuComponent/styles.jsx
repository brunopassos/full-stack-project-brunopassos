import styled from "styled-components";

export const StyledContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 375px;
    height: 400px;


    .divIcons{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 90%;
    }

    .divText{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 90%;

        h2{
            font-size: 25px;
        }

    }

    .icons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`