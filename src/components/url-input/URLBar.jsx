import { useState } from "react";
import axios from "axios";
import URLOutput from "./URLOutput";
import "./urlBar.css";

const BASE_URL = axios.create({
  baseURL: "https://url-shortener-be-production-c51f.up.railway.app",
});

export default function URLBar() {
  const [inputURL, setInputURL] = useState("");
  const [resultURL, setResultURL] = useState();

  const submitURL = async (e) => {
    e.preventDefault();
    try {
      const { data } = await BASE_URL.post(
        "/url",
        { URL: inputURL },
        {
          headers: { "Content-Type": "application/json;charset=UTF-8" },
        }
      );
      setInputURL("");
      setResultURL(data.SHORT_URL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="url-section">
      <form className="pt-10" onSubmit={(e) => submitURL(e)}>
        <label htmlFor="url-input" />
        <p className="text-white mb-6">Enter URL</p>
        <input
          id="url-input"
          type="text"
          className="rounded-md w-4/5 text-center"
          required
          value={inputURL}
          onChange={(e) => setInputURL(e.target.value)}
        />
        <button type="submit" className="block m-auto mt-6 p-1 bg-white w-1/4">
          Submit
        </button>
      </form>
      {resultURL ? <URLOutput SHORT_URL={resultURL} /> : ""}
    </section>
  );
}
