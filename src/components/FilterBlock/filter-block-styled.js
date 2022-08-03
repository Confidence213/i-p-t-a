import styled from "styled-components";

export const FilterControlsBlock = styled.div`
  width: 232px;
  margin: 50px;
  padding-top: 20px;
  padding-bottom: 20px;

  border-radius: 5px;
  background-color: #fff;
  
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FilterControlsHeader = styled.p`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0;
  
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4A4A4A;
`;

export const FilterControlsList = styled.ul`
  margin: 0;
  padding: 0;
  
  list-style: none;
`;

export const FilterControlsListItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background: #F1FCFF;
  }
`;

export const FilterControlsInput = styled.input`
  display: none;
  
  &:checked + label::before {
    border: 1px solid #2196F3;
    background: url('/img/tick.png') 50% 50% no-repeat;
    background-size: 12px 8px;
  }
`;

export const FilterControlsLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #4A4A4A;

  cursor: pointer;
  
  &:before {
    content: "";

    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 10px;

    border: 1px solid #9ABBCE;
    border-radius: 2px;
    box-sizing: border-box;
  }
`;
