import WindowBar from "./WindowBar"

function MarkdownEditor() {
  return (
    <div>
        <WindowBar windowName="Editor" expandIcon="X"/>
        <textarea></textarea>
    </div>
  )
}

export default MarkdownEditor