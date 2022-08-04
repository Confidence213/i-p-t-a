import { SORT_ITEMS } from "../../constants";
import { ISortItem } from "./ISortItem";

import {
  SortControlsList,
  SortControlsListItem,
  SortControlsInput,
  SortControlsLabel,
  SortControlsHeader
} from "./sort-block-styled";

const getSortControlsList = (sortItems: ISortItem[]) => {
  return (
    <>
      <SortControlsHeader>Валюта</SortControlsHeader>
      <SortControlsList>
        {
          sortItems.map((item, id) => {
            const key = (id + 1) * Math.round(Math.random() * 1000000);

            return (
              <SortControlsListItem key={key}>
                <SortControlsInput type={"radio"} id={item.id} name={"sort"} value={item.value} defaultChecked={id === 0} />
                <SortControlsLabel htmlFor={item.id}>{item.label}</SortControlsLabel>
              </SortControlsListItem>
            );
          })
        }
      </SortControlsList>
    </>
  );
};

const SortBlock = () => {
  return (
    getSortControlsList(SORT_ITEMS)
  );
};

export default SortBlock;
