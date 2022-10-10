import WindowBar from "./WindowBar";
import { useDispatch } from "react-redux";
import { updateTextInput } from "../features/textInput/textInput";

function MarkdownEditor() {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateTextInput(e.target.value));
  }

  return (
    <div className="h-1/2 w-full">
      <WindowBar windowName="Editor" expandIcon="X" />
      <textarea onChange={handleChange}></textarea>
    </div>
  );
}

export default MarkdownEditor;
