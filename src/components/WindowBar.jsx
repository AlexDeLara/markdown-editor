import { AiOutlineFileMarkdown } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { CgMaximize } from "react-icons/cg";
import { useState } from "react";

function WindowBar(props) {
  const [visibility, setVisibility] = useState(true);

  function toggleVisibility() {
    setVisibility(!visibility);
    props.toggleVisibility();
  }

  return (
    <div className={`flex justify-between p-2 pr-4 w-full bg-teal-600 rounded-t ${visibility ? null : "rounded-b"}`}>
        <div className="flex items-center justify-start gap-1">
          <AiOutlineFileMarkdown />
          <p className="font-medium text-slate-900">{props.windowName}</p>
        </div>
      <button onClick={toggleVisibility}>
        {visibility ? <CgClose /> : <CgMaximize />}
      </button>
    </div>
  );
}

export default WindowBar;
