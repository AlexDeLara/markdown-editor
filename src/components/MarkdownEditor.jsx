import WindowBar from "./WindowBar";
import { useDispatch } from "react-redux";
import { updateTextInput } from "../features/textInput/textInput";
import { useState } from "react";
import { sampleMarkdown } from "../data/sampleMarkdown";

function MarkdownEditor() {
  const dispatch = useDispatch();

  const [visibility, setVisibility] = useState(true);
  const [value, setValue] = useState(sampleMarkdown);

  function handleChange(e) {
    dispatch(updateTextInput(e.target.value));
    setValue(e.target.value);
  }

  function toggleVisibility() {
    setVisibility(!visibility);
  }

  return (
    <div
      className={`${
        visibility ? "h-1/5" : null
      } w-1/2 flex flex-col items-center`}
    >
      <WindowBar windowName="Editor" toggleVisibility={toggleVisibility} />
      {visibility && (
        <textarea
          onChange={handleChange}
          className="w-full h-full p-4 rounded-b focus:outline-0"
          value={value}
        ></textarea>
      )}
    </div>
  );
}

export default MarkdownEditor;
