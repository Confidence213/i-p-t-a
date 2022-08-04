import { IFilterItem } from "./components/FilterBlock/IFilterItem";
import { ISortItem } from "./components/SortBlock/ISortItem";

export const FILTER_ITEMS: IFilterItem[] = [
  {
    id: "all",
    label: "Все"
  },
  {
    id: "0",
    label: "Без пересадок"
  },{
    id: "1",
    label: "1 пересадка"
  },{
    id: "2",
    label: "2 пересадка"
  },{
    id: "3",
    label: "3 пересадка"
  },
];

export const SORT_ITEMS: ISortItem[] = [
  {
    id: "rub",
    value: "rub",
    label: "RUB"
  },
  {
    id: "usd",
    value: "usd",
    label: "USD"
  },
  {
    id: "eur",
    value: "eur",
    label: "EUR"
  }
];
