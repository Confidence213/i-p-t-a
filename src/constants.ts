import { FilterItem } from "./components/FilterBlock/FilterItem";
import { CurrencyItem } from "./components/CurrencyBlock/CurrencyItem";

export const FILTERS: FilterItem[] = [
  {
    id: "all",
    value: -1,
    label: "Все"
  },
  {
    id: "0-transfers",
    value: 0,
    label: "Без пересадок"
  },
  {
    id: "1-transfer",
    value: 1,
    label: "1 пересадка"
  },
  {
    id: "2-transfers",
    value: 2,
    label: "2 пересадки"
  },
  {
    id: "3-transfers",
    value: 3,
    label: "3 пересадки"
  }
];

export const FILTER_MAP: { [key: string]: string } = {
  "-1": "all",
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3"
};

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

export const CURRENCIES_MAP: { [key: string]: string } = {
  "rub": "₽",
  "usd": "$",
  "eur": "€"
};

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

export const TICKET_SHOW_NUMBER = 5;
