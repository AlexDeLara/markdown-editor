import WindowBar from "./WindowBar";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

function MarkdownPreviewer() {
  const textInput = useSelector((state) => state.textInput);

  const [visibility, setVisibility] = useState(true);

  function toggleVisibility() {
    setVisibility(!visibility);
  }

  return (
    <div className={`${visibility ? "h-3/5" : null} w-full`}>
      <WindowBar windowName="Previewer" toggleVisibility={toggleVisibility}/>
      {visibility && <div className="bg-white h-full rounded-b p-4 overflow-scroll prose max-w-none">
        <ReactMarkdown children={textInput} remarkPlugins={[remarkGfm]} />
      </div>}
    </div>
  );
}

export default MarkdownPreviewer;
