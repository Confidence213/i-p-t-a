import { CURRENCIES } from "../../constants";
import { CurrencyItem } from "./CurrencyItem";

import {
  CurrencyControlsList,
  CurrencyControlsListItem,
  CurrencyControlsInput,
  CurrencyControlsLabel,
  CurrencyControlsHeader
} from "./currency-block-styled";

const getCurrencyControlsList = (currencyItems: CurrencyItem[]) => {
  return (
    <>
      <CurrencyControlsHeader>Валюта</CurrencyControlsHeader>
      <CurrencyControlsList>
        {
          currencyItems.map((item, id) => {
            const key = (id + 1) * Math.round(Math.random() * 1000000);

            return (
              <CurrencyControlsListItem key={key}>
                <CurrencyControlsInput type={"radio"} id={item.id} name={"sort"} value={item.value} defaultChecked={id === 0} />
                <CurrencyControlsLabel htmlFor={item.id}>{item.label}</CurrencyControlsLabel>
              </CurrencyControlsListItem>
            );
          })
        }
      </CurrencyControlsList>
    </>
  );
};

const CurrencyBlock = () => {
  return (
    getCurrencyControlsList(CURRENCIES)
  );
};

export default CurrencyBlock;
