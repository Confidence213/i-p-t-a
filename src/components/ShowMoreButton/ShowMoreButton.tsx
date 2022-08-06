import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ticketSlice } from "../../store/reducers/TicketSlice";

import { ShowMoreButtonStyled } from "./show-more-button-styled";

const ShowMoreButton = () => {
  const dispatch = useAppDispatch();
  const { ticketsNumber, ticketShowNumber } = useAppSelector(state => state.ticketReducer);
  const { addMoreTickets } = ticketSlice.actions;

  const showMoreButtonClickHandler = () => {
    if (ticketsNumber > ticketShowNumber) {
      dispatch(addMoreTickets());
    }
  };

  return ticketsNumber > ticketShowNumber
    ?
    <ShowMoreButtonStyled onClick={showMoreButtonClickHandler}>Показать еще 5 билетов!</ShowMoreButtonStyled>
    :
    null;
};

export default ShowMoreButton;
