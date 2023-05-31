import { configureStore } from "@reduxjs/toolkit";

import ticketTypeReducer from "./ticketRedux";

const store = configureStore({
  reducer: { type: ticketTypeReducer },
});

export default store;
