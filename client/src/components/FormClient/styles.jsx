import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 470px;
  border-radius: 8px;

  

  p {
    font-size: 16px;
    font-family: "Sarala";
  }
`;

export const StyledMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    padding: 15px;
`

export const StyledInput = styled.input`
  width: 303px;
  height: 60px;
  background: #e4e5ea;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  color: #7f8386;
  margin-bottom: 35px;
  padding-left: 20px;
`;

export const StyledButton = styled.button`
  width: 302.29px;
  height: 60px;
  background: #5f75b1;
  border-radius: 15px;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
`;
