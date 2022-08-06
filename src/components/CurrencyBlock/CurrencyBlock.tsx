import { CurrencyItem } from "./CurrencyItem";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCurrencyValue } from "../../store/reducers/ActionCreator";

import { CURRENCIES } from "../../constants";

import {
  CurrencyControlsList,
  CurrencyControlsListItem,
  CurrencyControlsInput,
  CurrencyControlsLabel,
  CurrencyControlsHeader
} from "./currency-block-styled";

const CurrencyBlock = () => {
  const { currency } = useAppSelector(state => state.ticketReducer);
  const dispatch = useAppDispatch();

  const getCurrencyControlsList = (currencyItems: CurrencyItem[]) => {
    const currencyControlsClickHandler = (value: string) => {
      if (value !== currency.type) {
        dispatch(fetchCurrencyValue(value));
      }
    };

    return (
      <>
        <CurrencyControlsHeader>Валюта</CurrencyControlsHeader>
        <CurrencyControlsList>
          {
            currencyItems.map((item, id) => {
              const key = (id + 1) * Math.round(Math.random() * 1000000);

              return (
                <CurrencyControlsListItem key={key}>
                  <CurrencyControlsInput type={"radio"} id={item.id} name={"sort"} value={item.value} defaultChecked={item.value === currency.type} />
                  <CurrencyControlsLabel htmlFor={item.id} onClick={() => currencyControlsClickHandler(item.value)}>{item.label}</CurrencyControlsLabel>
                </CurrencyControlsListItem>
              );
            })
          }
        </CurrencyControlsList>
      </>
    );
  };

  return (
    getCurrencyControlsList(CURRENCIES)
  );
};

export default CurrencyBlock;
