import FilterBlock from "../FilterBlock/FilterBlock";
import SortBlock from "../SortBlock/SortBlock";

import { PageControlsWrapper } from "./page-controls-styled";

const PageControls = () => {
  return (
    <PageControlsWrapper>
      <SortBlock />
      <FilterBlock />
    </PageControlsWrapper>
  );
};

export default PageControls;
