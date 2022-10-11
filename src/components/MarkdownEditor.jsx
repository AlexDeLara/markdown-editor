import WindowBar from "./WindowBar";
import { useDispatch } from "react-redux";
import { updateTextInput } from "../features/textInput/textInput";
import { useState } from "react";

function MarkdownEditor() {
  const sampleMarkdown = fetch("./data/sampleMarkdown").then((response) =>
    response.text()
  );

  const dispatch = useDispatch();

  const [visibility, setVisibility] = useState(true);

  function handleChange(e) {
    dispatch(updateTextInput(e.target.value));
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
          value={sampleMarkdown}
        ></textarea>
      )}
    </div>
  );
}

export default MarkdownEditor;
