import FilterBlock from "../FilterBlock/FilterBlock";
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";

import { PageControlsWrapper } from "./page-controls-styled";

const PageControls = () => {
  return (
    <PageControlsWrapper>
      <CurrencyBlock />
      <FilterBlock />
    </PageControlsWrapper>
  );
};

export default PageControls;
