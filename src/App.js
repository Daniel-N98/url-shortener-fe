import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App bg-gray-600 p-6 h-screen">
      <h1 className="text-white font-bold">URL Shortener</h1>
      <HomePage />
    </div>
  );
}

export default App;
