import ContentBlock from "../ContentBlock/ContentBlock";
import PageControls from "../PageControls/PageControls";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

import { useAppSelector } from "../../hooks/redux";

import { PageBodyWrapper } from "./page-body-styled";

const PageBody = () => {
  const { error } = useAppSelector(state => state.ticketReducer);

  return !Boolean(error)
    ?
    <PageBodyWrapper>
      <PageControls />
      <ContentBlock />
    </PageBodyWrapper>
    :
    <ErrorBlock />;
};

export default PageBody;
