import styled from "styled-components";

export const ErrorBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-bottom: 30px;

  font-size: 46px;
  line-height: 50px;
`;

export const ErrorBlockReloadButton = styled.button`
  width: 500px;
  height: 50px;
  padding: 0;
  
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  
  background-color: #2196F3;
  border-radius: 5px;
  border: 0;
  
  cursor: pointer;
`;
