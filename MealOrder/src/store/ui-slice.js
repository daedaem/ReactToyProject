import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isModal: false,
  },
  reducers: {
    changeModal: (state) => {
      console.log(state.isModal);
      state.isModal = !state.isModal;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
