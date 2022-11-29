import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 386px;
  overflow-y: visible;
  height: 100%;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #7f8386;

  h2 {
    color: #5f75b1;
    font-size: 22px;
  }
`;

export const StyledClientSection = styled.section`
  width: 100%;
  min-height: 136px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #7f8386;

`;

export const StyledDataSection = styled.section`
  height: 136px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  padding-left: 20px;

  p {
    margin: 0;
    padding: 0;
  }

  .name {
    color: #364852;
    font-size: 18px;
    font-weight: 400;
  }

  .secondaryData {
    color: #7f8386;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
  }
`;
export const StyledOptionsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`;


export const StyledOptionsButton = styled.button`
    border: none;
    background: transparent;
`