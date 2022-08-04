import ContentBlock from "../ContentBlock/ContentBlock";
import PageControls from "../PageControls/PageControls";

import { PageBodyWrapper } from "./page-body-styled";

const PageBody = () => {
  return (
    <PageBodyWrapper>
      <PageControls />
      <ContentBlock />
    </PageBodyWrapper>
  )
};

export default PageBody;
