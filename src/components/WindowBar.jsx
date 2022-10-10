import { AiOutlineFileMarkdown } from "react-icons/ai";

function WindowBar(props) {
  return (
    <div className="flex justify-between mr-2 p-4">
        <div className="flex items-center justify-start gap-1">
            <AiOutlineFileMarkdown/>
            <p>{props.windowName}</p>
        </div>
        <button>{props.expandIcon}</button>
    </div>
  )
}

export default WindowBar