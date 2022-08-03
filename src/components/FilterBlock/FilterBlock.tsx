import { IFilterItem } from "./IFilterItem";
import { FILTER_ITEMS } from "../../constants";

import {
  FilterControlsBlock,
  FilterControlsHeader,
  FilterControlsList,
  FilterControlsListItem,
  FilterControlsInput,
  FilterControlsLabel
} from "./filter-block-styled";

const getFilterControlsList = (filterItems: IFilterItem[]) => {
  return (
    <FilterControlsList>
      { filterItems.map((item, id) => {
        const key = (id + 1) * Math.round(Math.random() * 100);

        return (
          <FilterControlsListItem key={key}>
            <FilterControlsInput type={"checkbox"} id={item.id} name={"filter"} defaultChecked={id === 0} />
            <FilterControlsLabel htmlFor={item.id}>{item.label}</FilterControlsLabel>
          </FilterControlsListItem>
        );
      }) }
    </FilterControlsList>
  );
};

const FilterBlock = () => {
  return (
    <FilterControlsBlock>
      <FilterControlsHeader>Количество пересадок</FilterControlsHeader>
      { getFilterControlsList(FILTER_ITEMS) }
    </FilterControlsBlock>
  );
};

export default FilterBlock;
