import { createSlice } from "@reduxjs/toolkit";

const ticketTypeSlice = createSlice({
  name: "type",
  initialState: {
    types: [],
  },

  reducers: {
    addType: (state, action) => {
      state.types.push(action.payload);
    },

    deleteType: (state, action) => {
      state.types.splice(action.payload, 1);
    },

    updateType: (state, action) => {
      state.types[action.payload.index] = action.payload.updatedType;
    },
  },
});

export const { addType, deleteType, updateType } = ticketTypeSlice.actions;
export default ticketTypeSlice.reducer;
