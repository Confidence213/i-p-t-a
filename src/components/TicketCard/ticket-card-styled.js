import styled from "styled-components";

export const TicketCardWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
`;

export const MainInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-right: 1px solid #ececec;
`;

export const TicketCardImage = styled.img`
  margin-bottom: 20px;
`;

export const TicketCardButton = styled.button`
  padding: 7px;
  width: 180px;

  color: #fff;

  background-color: #ff691c;
  border: 0;
  border-radius: 5px;

  &:hover {
    background-color: #FC7E41FF;

    cursor: pointer;
  }
`;

export const AdditionalInfoBlock = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const TicketTimeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const TimeBlock = styled.div`
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0.5px;
`;

export const TicketDatesBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateBlock = styled.div`
  
`;

export const DateBlockLocation = styled.p`
  margin: 0;
  margin-bottom: 5px;
  
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.5px;
`;

export const DateInfo = styled.p`
  margin: 0;
  
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #4A4A4A;
`;

export const TransferBlock = styled.p`
  position: relative;
  
  margin: 0;
  
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #4A4A4A;
  text-transform: uppercase;
  
  &::after {
    position: absolute;
    bottom: 10px;
    left: -50%;
    content: "";
    
    width: 200%;
    height: 1px;
    
    background-color: #d6d4d4;

    transform: translateX(-5px);
  }
  
  &::before {
    position: absolute;
    left: 150%;
    top: 50%;
    content: "";

    width: 15px;
    height: 15px;
    
    background: url("/img/aircraft.png") 50% 50% no-repeat;
    background-size: cover;

    transform: translateX(-5px);
  }
`;
