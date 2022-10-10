import { createSlice } from "@reduxjs/toolkit";

export const textInputSlice = createSlice({
  name: "text-input",
  initialState: "",
  reducers: {
    updateTextInput: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateTextInput } = textInputSlice.actions;
export default textInputSlice.reducer;
