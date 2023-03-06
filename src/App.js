import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navigation/Navbar";
import RedirectToMainURL from "./components/RedirectToMainURL";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App bg-gray-600 p-6 h-screen">
      <h1 className="text-white font-bold">URL Shortener</h1>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/:shortened_url" element={<RedirectToMainURL />} />
      </Routes>
    </div>
  );
}

export default App;
