import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Ticket } from "../../components/ContentBlock/Ticket";

import { TICKET_SHOW_NUMBER } from "../../constants";

type Currency = {
  coeff: number;
  type: string;
};

interface TicketState {
  tickets: Ticket[],
  filteredTickets: Ticket[],
  currency: Currency,
  filter: string[],
  error: string,
  ticketShowNumber: number,
  ticketsNumber: number
}

const initialState: TicketState = {
  tickets: [],
  filteredTickets: [],
  currency: {
    coeff: 1,
    type: "rub"
  },
  filter: ["all"],
  error: "",
  ticketShowNumber: 0,
  ticketsNumber: 0
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    initializeData(state, action: PayloadAction<Ticket[]>) {
      state.tickets = action.payload;
      state.ticketShowNumber += TICKET_SHOW_NUMBER;
      state.filteredTickets = state.tickets.slice(0, state.ticketShowNumber);
      state.ticketsNumber = state.tickets.length;
    },
    changeCurrency(state, action: PayloadAction<Currency>) {
      const { coeff, type } = action.payload;

      state.currency = {
        coeff,
        type
      };
    },
    changeFilter(state, action: PayloadAction<string[]>) {
      state.ticketShowNumber = 0;
      state.filter = action.payload;

      const filteredTickets = state.tickets.filter(ticket => {
        if (state.filter.includes("all")) {
          return true;
        }

        return !!state.filter.includes(String(ticket.stops));
      });

      state.filteredTickets = filteredTickets.slice(state.ticketShowNumber, TICKET_SHOW_NUMBER);
      state.ticketsNumber = filteredTickets.length;
    },
    changeErrorMessage(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    addMoreTickets(state) {
      state.ticketShowNumber += TICKET_SHOW_NUMBER;
      state.filteredTickets = [...state.filteredTickets, ...state.tickets.filter(ticket => {
        if (state.filter.includes("all")) {
          return true;
        }

        return !!state.filter.includes(String(ticket.stops));
      }).slice(state.ticketShowNumber, state.ticketShowNumber + TICKET_SHOW_NUMBER)];
    },
  }
});

export default ticketSlice.reducer;
