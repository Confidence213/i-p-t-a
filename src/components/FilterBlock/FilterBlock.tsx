import { useRef, RefObject } from "react";

import { FilterItem } from "./FilterItem";
import { FILTERS } from "../../constants";

import {
  FilterControlsBlock,
  FilterControlsHeader,
  FilterControlsList,
  FilterControlsListItem,
  FilterControlsInput,
  FilterControlsLabel,
  FilterControlsOnlyButton
} from "./filter-block-styled";

// TODO: фильтрация
// TODO: пересчет валюты
// TODO: сделать что-то с кнопкой показать еще (убрать или доделать)

const getFilterControlsList = (filterItems: FilterItem[]) => {
  const inputRefs: RefObject<null | HTMLInputElement>[] = new Array(FILTERS.length).fill(null);

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
      { getFilterControlsList(FILTERS) }
    </FilterControlsBlock>
  );
};

export default FilterBlock;
