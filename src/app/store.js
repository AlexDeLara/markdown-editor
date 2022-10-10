import { configureStore } from "@reduxjs/toolkit";
import textInputReducer from "../features/textInput/textInput";

export default configureStore({
  reducer: {
    textInput: textInputReducer,
  },
});
