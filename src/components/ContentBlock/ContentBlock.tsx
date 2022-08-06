import { useEffect, useRef } from "react";

import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import TicketCard from "../TicketCard/TicketCard";
import { Ticket } from "./Ticket";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ticketSlice } from "../../store/reducers/TicketSlice";

import jsonData from "../../data/tickets.json";

import { ContentBlockWrapper, NoContentMessage } from "./content-block-styled";

const getTicketCards = (data: Ticket[]) => {
  return (
    data.length !== 0 ? data.map((ticketData, id) => {
      const key = (id + 1) * Math.round(Math.random() * 1000000);

      return (
        <TicketCard key={key} data={ticketData} />
      );
    })
      : <NoContentMessage>Данные не найдены или загружаются...</NoContentMessage>
  );
};

const ContentBlock = () => {
  const { filteredTickets } = useAppSelector(state => state.ticketReducer);
  const { initializeData } = ticketSlice.actions;
  const dispatch = useAppDispatch();
  const shouldInit = useRef(true);

  useEffect(() => {
    if (shouldInit.current) {
      shouldInit.current = false;

      dispatch(initializeData(jsonData.tickets));
    }
  }, [dispatch, initializeData]);

  return (
    <ContentBlockWrapper>
      { getTicketCards(filteredTickets) }
      { filteredTickets.length !== 0 ? <ShowMoreButton /> : null }
    </ContentBlockWrapper>
  );
};

export default ContentBlock;
