import styled from "styled-components";

export const SortControlsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  width: 502px;
  
  list-style: none;
`;

export const SortControlsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
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

export const SortControlsInput = styled.input`
  display: none;
`;

export const SortControlsLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;

  border: 1px solid #DFE5EC;
`;
