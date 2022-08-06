import { ticketSlice } from "./TicketSlice";

import { AppDispatch } from "../store";

import { recalculate } from "../../utils";

const { changeCurrency, changeErrorMessage } = ticketSlice.actions;

export const fetchCurrencyValue = (currency: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await recalculate(currency);

    dispatch(changeCurrency({coeff: response, type: currency}));
  } catch(err) {
    if (err instanceof Error) {
      dispatch(changeErrorMessage(err.message));
    }
  }
};
