import React, { RefObject } from "react";

import { FilterItem } from "./FilterItem";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ticketSlice } from "../../store/reducers/TicketSlice";

import { FILTERS, FILTER_MAP } from "../../constants";

import {
  FilterControlsBlock,
  FilterControlsHeader,
  FilterControlsList,
  FilterControlsListItem,
  FilterControlsInput,
  FilterControlsLabel,
  FilterControlsOnlyButton
} from "./filter-block-styled";

const FilterBlock = () => {
  const { filter } = useAppSelector(state => state.ticketReducer);
  const dispatch = useAppDispatch();
  const { changeFilter } = ticketSlice.actions;

  const getFilterControlsList = (filterItems: FilterItem[]) => {
    const inputRefs: RefObject<null | HTMLInputElement>[] = new Array(FILTERS.length).fill(null);

    const filterControlsOnlyButtonClickHandler = (id: number) => {
      inputRefs.forEach((it, index) => {
        const element = inputRefs[index];
        const { current } = element;

        if ((index === id + 1) && (current as HTMLInputElement)) {
          current!.checked = true;
        }

        if ((index !== id + 1) && (current as HTMLInputElement)) {
          current!.checked = false;
        }
      });

      dispatch(changeFilter([FILTER_MAP[id]]));
    };

    const filterControlsChangeHandler = () => {
      const filters: string[] = [];

      inputRefs.forEach(it => {
        if (it.current?.checked === true) {
          filters.push(it!.current.value);
        }
      });

      dispatch(changeFilter(filters.map(it => FILTER_MAP[it])));
    };

    return (
      <FilterControlsList>
        { filterItems.map((item, id) => {
          const key = (id + 1) * Math.round(Math.random() * 1000000);

          inputRefs[id] = React.createRef();

          return (
            <FilterControlsListItem key={key}>
              <FilterControlsInput ref={inputRefs[id]} type={"checkbox"} id={item.id} name={"filter"} value={item.value} onChange={filterControlsChangeHandler} checked={filter.includes(FILTER_MAP[item.value])} />
              <FilterControlsLabel htmlFor={item.id}>{item.label}</FilterControlsLabel>
              <FilterControlsOnlyButton onClick={() => filterControlsOnlyButtonClickHandler(item.value)}>Только</FilterControlsOnlyButton>
            </FilterControlsListItem>
          );
        }) }
      </FilterControlsList>
    );
  };

  return (
    <FilterControlsBlock>
      <FilterControlsHeader>Количество пересадок</FilterControlsHeader>
      { getFilterControlsList(FILTERS) }
    </FilterControlsBlock>
  );
};

export default FilterBlock;
