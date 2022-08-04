import { FilterItem } from "./components/FilterBlock/FilterItem";
import { CurrencyItem } from "./components/CurrencyBlock/CurrencyItem";

export const FILTERS: FilterItem[] = [
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

export const CURRENCIES: CurrencyItem[] = [
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

export const DAYS: { [key: number]: string } = {
  1: "Пн",
  2: "Вт",
  3: "Ср",
  4: "Чт",
  5: "Пт",
  6: "Сб",
  7: "Вс",
};

export const MONTHS: { [key: number]: string } = {
  0: "янв",
  1: "фев",
  2: "мар",
  3: "апр",
  4: "май",
  5: "июн",
  6: "июл",
  7: "авг",
  8: "сен",
  9: "окт",
  10: "ноя",
  11: "дек",
};
