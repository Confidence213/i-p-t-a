import {
  TicketCardWrapper,
  MainInfoBlock,
  TicketCardImage,
  TicketCardButton,
  AdditionalInfoBlock,
  TicketTimeBlock,
  TimeBlock,
  TicketDatesBlock,
  DateBlock,
  DateBlockLocation,
  DateInfo,
  TransferBlock
} from "./ticket-card-styled";

const TicketCard = () => {
  return (
    <TicketCardWrapper>
      <MainInfoBlock>
        <TicketCardImage src={"//pics.avs.io/150/50/TK.png"} width={150} height={50} alt={"Логотип авиакомпании"}/>
        <TicketCardButton>Купить <br/> за 21 032₽</TicketCardButton>
      </MainInfoBlock>
      <AdditionalInfoBlock>
        <TicketTimeBlock>
          <TimeBlock>09:25</TimeBlock>
          <TransferBlock>1 пересадка</TransferBlock>
          <TimeBlock>11:45</TimeBlock>
        </TicketTimeBlock>
        <TicketDatesBlock>
          <DateBlock>
            <DateBlockLocation>VVO, Владивосток</DateBlockLocation>
            <DateInfo>9 окт 2018, Пт</DateInfo>
          </DateBlock>
          <DateBlock>
            <DateBlockLocation>Тель-Авив, TLV</DateBlockLocation>
            <DateInfo>10 окт 2018, Пт</DateInfo>
          </DateBlock>
        </TicketDatesBlock>
      </AdditionalInfoBlock>
    </TicketCardWrapper>
  );
};

export default TicketCard;
