import SortBlock from "../SortBlock/SortBlock";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import TicketCard from "../TicketCard/TicketCard";

const ContentBlock = () => {
  return (
    <>
      <SortBlock />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <ShowMoreButton />
    </>
  );
};

export default ContentBlock;
