import { SORT_ITEMS } from "../../constants";

import {
  SortControlsList,
  SortControlsListItem,
  SortControlsInput,
  SortControlsLabel
} from "./sort-block-styled";

const SortBlock = () => {
  return (
    <SortControlsList>
      <SortControlsListItem>
        <SortControlsInput type={"radio"} id={"cheapest"} name={"sort"} value={"1"} defaultChecked={true} />
        <SortControlsLabel htmlFor={"cheapest"}>Самый дешевый</SortControlsLabel>
      </SortControlsListItem>
      <SortControlsListItem>
        <SortControlsInput type={"radio"} id={"fastest"} name={"sort"} value={"2"} />
        <SortControlsLabel htmlFor={"fastest"}>Самый быстрый</SortControlsLabel>
      </SortControlsListItem>
      <SortControlsListItem>
        <SortControlsInput type={"radio"} id={"optimal"} name={"sort"} value={"3"} />
        <SortControlsLabel htmlFor={"optimal"}>Оптимальный</SortControlsLabel>
      </SortControlsListItem>
    </SortControlsList>
  );
};

export default SortBlock;
