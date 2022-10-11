import { createSlice } from "@reduxjs/toolkit";
import { sampleMarkdown } from "../../data/sampleMarkdown";

export const textInputSlice = createSlice({
  name: "text-input",
  initialState: sampleMarkdown,
  reducers: {
    updateTextInput: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateTextInput } = textInputSlice.actions;
export default textInputSlice.reducer;
