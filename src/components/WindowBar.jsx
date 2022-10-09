import { AiOutlineFileMarkdown } from "react-icons/ai";

function WindowBar(props) {
  return (
    <div>
        <div>
            <AiOutlineFileMarkdown/>
            <p>{props.windowName}</p>
        </div>
        <button>{props.expandIcon}</button>
    </div>
  )
}

export default WindowBar