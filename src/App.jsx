import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
  return (
    <main className="bg-teal-500 h-screen p-20">
      <div className="flex flex-col items-center h-screen justify-center w-4/6 mx-auto bg-red-100">
        <MarkdownEditor />
        <MarkdownPreviewer />
      </div>
    </main>
  );
}

export default App;
