import { Route, Routes } from "react-router-dom";
import "./App.css";
import RedirectToMainURL from "./components/RedirectToMainURL";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App bg-gray-600 p-6 h-screen">
      <Routes>
        <Route path="/:shortened_url" element={<RedirectToMainURL />} />
      </Routes>
      <h1 className="text-white font-bold">URL Shortener</h1>
      <HomePage />
    </div>
  );
}

export default App;
