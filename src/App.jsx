import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
  return (
    <main className="bg-black h-full">
      <div className="flex flex-col items-center h-screen justify-center w-4/6 mx-auto gap-6">
        <MarkdownEditor />
        <MarkdownPreviewer />
      </div>
    </main>
  );
}

export default App;
