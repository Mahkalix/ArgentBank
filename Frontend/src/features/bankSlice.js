import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  name: "bank",
  initialState: { token: null },
  reducers: {
    setBank(state, { payload }) {
      state.bank = payload;
    },
  },
});
export const { setBank } = bankSlice.actions;
export default bankSlice.reducer;
