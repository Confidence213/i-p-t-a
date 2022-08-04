import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import TicketCard from "../TicketCard/TicketCard";
import { Ticket } from "./Ticket";

import { ContentBlockWrapper } from "./content-block-styled";

const jsonData = require("../../data/tickets.json");

const getTicketCards = (data: Ticket[]) => {
  return (
    data.map((ticketData, id) => {
      const key = (id + 1) * Math.round(Math.random() * 1000000);

      return (
        <TicketCard key={key} data={ticketData} />
      );
    })
  );
};

const ContentBlock = () => {
  return (
    <ContentBlockWrapper>
      { getTicketCards(jsonData.tickets) }
      <ShowMoreButton />
    </ContentBlockWrapper>
  );
};

export default ContentBlock;
