import { ITicketCardProps } from "./ITicketCard";

import { useAppSelector } from "../../hooks/redux";

import { formatPrice, getCorrectSpelling } from "../../utils";
import { DAYS, MONTHS, CURRENCIES_MAP } from "../../constants";

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

const TicketCard: React.FC<ITicketCardProps> = (props) => {
  const {
    carrier, stops, departure_time, arrival_time, origin,
    origin_name, destination, destination_name,
    departure_date, arrival_date, price
  } = props.data;
  const { currency } = useAppSelector(state => state.ticketReducer);

  const departureDate = new Date(departure_date);
  const arrivalDate = new Date(arrival_date);
  const formattedPrice = formatPrice(price, currency.coeff);
  const formattedTransferMessage = `${stops} ${getCorrectSpelling(stops)}`;
  const departureDateString = `${departureDate.getDate()} ${MONTHS[departureDate.getMonth()]} ${departureDate.getFullYear()}, ${DAYS[departureDate.getDay()]}`;
  const arrivalDateString = `${arrivalDate.getDate()} ${MONTHS[arrivalDate.getMonth()]} ${arrivalDate.getFullYear()}, ${DAYS[arrivalDate.getDay()]}`;

  return (
    <TicketCardWrapper>
      <MainInfoBlock>
        <TicketCardImage src={`//pics.avs.io/150/50/${carrier}.png`} width={150} height={50} alt={"Логотип авиакомпании"}/>
        <TicketCardButton>Купить <br/> за {formattedPrice}{CURRENCIES_MAP[currency.type]}</TicketCardButton>
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
