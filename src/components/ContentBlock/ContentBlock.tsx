import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import TicketCard from "../TicketCard/TicketCard";

import { ContentBlockWrapper } from "./content-block-styled";

const ContentBlock = () => {
  return (
    <ContentBlockWrapper>
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <ShowMoreButton />
    </ContentBlockWrapper>
  );
};

export default ContentBlock;
