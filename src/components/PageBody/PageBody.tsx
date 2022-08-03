import FilterBlock from "../FilterBlock/FilterBlock";
import ContentBlock from "../ContentBlock/ContentBlock";

import { PageBodyWrapper } from "./page-body-styled";

const PageBody = () => {
  return (
    <PageBodyWrapper>
      <FilterBlock />
      <ContentBlock />
    </PageBodyWrapper>
  )
};

export default PageBody;
