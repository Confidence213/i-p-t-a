import React from "react";

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
import { TicketCardProps } from "./ITicketCard"

import { DAYS, MONTHS } from "../../constants";

const formatPrice = (price: number): string => {
  const result = [];
  const priceNums = String(price).split("");

  for (let i = priceNums.length; i > 0; i--) {
    result.push(priceNums[i - 1]);

    if ((i % 3 === 0) && (i !== 0)) {
      result.push(" ");
    }
  }

  return result.reverse().join("");
};

const getCorrectSpelling = (num: number): string => {
  switch (num % 20) {
    case 1:
      return "пересадка";

    case 2:
      return "пересадки";

    case 3:
      return "пересадки";

    case 4:
      return "пересадки";

    default:
      return "пересадок";
  }
};

const TicketCard: React.FC<TicketCardProps> = (props) => {
  const {
    carrier, stops, departure_time, arrival_time, origin,
    origin_name, destination, destination_name,
    departure_date, arrival_date, price
  } = props.data;

  const departureDate = new Date(departure_date);
  const arrivalDate = new Date(arrival_date);
  const formattedPrice = formatPrice(price);
  const formattedTransferMessage = `${stops} ${getCorrectSpelling(stops)}`;
  const departureDateString = `${departureDate.getDate()} ${MONTHS[departureDate.getMonth()]} ${departureDate.getFullYear()}, ${DAYS[departureDate.getDay()]}`;
  const arrivalDateString = `${arrivalDate.getDate()} ${MONTHS[arrivalDate.getMonth()]} ${arrivalDate.getFullYear()}, ${DAYS[arrivalDate.getDay()]}`;

  return (
    <TicketCardWrapper>
      <MainInfoBlock>
        <TicketCardImage src={`//pics.avs.io/150/50/${carrier}.png`} width={150} height={50} alt={"Логотип авиакомпании"}/>
        <TicketCardButton>Купить <br/> за {formattedPrice}₽</TicketCardButton>
      </MainInfoBlock>
      <AdditionalInfoBlock>
        <TicketTimeBlock>
          <TimeBlock>{departure_time}</TimeBlock>
          <TransferBlock>{formattedTransferMessage}</TransferBlock>
          <TimeBlock>{arrival_time}</TimeBlock>
        </TicketTimeBlock>
        <TicketDatesBlock>
          <DateBlock>
            <DateBlockLocation>{`${origin}, ${origin_name}`}</DateBlockLocation>
            <DateInfo>{departureDateString}</DateInfo>
          </DateBlock>
          <DateBlock>
            <DateBlockLocation>{`${destination_name}, ${destination}`}</DateBlockLocation>
            <DateInfo>{arrivalDateString}</DateInfo>
          </DateBlock>
        </TicketDatesBlock>
      </AdditionalInfoBlock>
    </TicketCardWrapper>
  );
};

export default TicketCard;
