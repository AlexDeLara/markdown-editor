import WindowBar from "./WindowBar";
import { useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownPreviewer() {
  const textInput = useSelector((state) => state.textInput);

  return (
    <div className="h-1/2 bg-white w-full flex flex-col items-center">
      <WindowBar windowName="Previewer" expandIcon="X" />
      <ReactMarkdown children={textInput} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default MarkdownPreviewer;
