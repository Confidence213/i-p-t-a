import styled from "styled-components";

export const CurrencyControlsList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  
  list-style: none;
`;

export const CurrencyControlsHeader = styled.p`
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4A4A4A;
`;

export const CurrencyControlsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  
  text-align: center;

  background: #FFFFFF;
  box-sizing: border-box;
  
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  &:nth-child(2) label {
    border-left: 0;
    border-right: 0;
    
    &:hover {
      border-left: 1px solid #2196F3;
      border-right: 1px solid #2196F3;
    }
  }
  
  &:first-child label {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child label {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  & input:checked + label {
    color: #fff;

    background-color: #2196F3;
    border: 1px solid #2196F3;
  }

  &:first-child input:checked + label {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child input:checked + label {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const CurrencyControlsInput = styled.input`
  display: none;
`;

export const CurrencyControlsLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;

  color: #2196F3;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;

  border: 1px solid #DFE5EC;

  &:hover {
    background-color: #e5f1ff;
    border-color: #2196F3;

    cursor: pointer;
  }
`;
