import React, { useRef, RefObject } from "react";

import { IFilterItem } from "./IFilterItem";
import { FILTER_ITEMS } from "../../constants";

import {
  FilterControlsBlock,
  FilterControlsHeader,
  FilterControlsList,
  FilterControlsListItem,
  FilterControlsInput,
  FilterControlsLabel,
  FilterControlsOnlyButton
} from "./filter-block-styled";

const getFilterControlsList = (filterItems: IFilterItem[]) => {
  const inputRefs: RefObject<null | HTMLInputElement>[] = new Array(FILTER_ITEMS.length).fill(null);

  const filterControlsClickHandler = (id: number) => {
    inputRefs.forEach((it, index) => {
      const element = inputRefs[index];
      const { current } = element;

      if ((index !== id) && (current)) {
        current.checked = false;
      }
    });
  };

  return (
    <FilterControlsList>
      { filterItems.map((item, id) => {
        const key = (id + 1) * Math.round(Math.random() * 1000000);

        inputRefs[id] = useRef<HTMLInputElement>(null);

        return (
          <FilterControlsListItem key={key}>
            <FilterControlsInput ref={inputRefs[id]} type={"checkbox"} id={item.id} name={"filter"} defaultChecked={id === 0} />
            <FilterControlsLabel htmlFor={item.id}>{item.label}</FilterControlsLabel>
            <FilterControlsOnlyButton onClick={() => filterControlsClickHandler(id)}>Только</FilterControlsOnlyButton>
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
