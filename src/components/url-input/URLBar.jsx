import { useState } from "react";
import axios from "axios";
import URLOutput from "./URLOutput";
import "./urlBar.css";
import ErrorBox from "../error/ErrorBox";

export const BASE_URL = axios.create({
  baseURL: "https://url-shortener-be-production-c51f.up.railway.app",
});

export default function URLBar() {
  const [inputURL, setInputURL] = useState("");
  const [resultURL, setResultURL] = useState();
  const [errors, setErrors] = useState();

  const submitURL = async (e) => {
    e.preventDefault();
    if (inputURL.length < 1) {
      return setErrors(["Enter a URL"]);
    }
    try {
      const { data } = await BASE_URL.post(
        "/url",
        { URL: inputURL },
        {
          headers: { "Content-Type": "application/json;charset=UTF-8" },
        }
      );
      setInputURL("");
      setErrors("");
      setResultURL(data.SHORT_URL);
    } catch (error) {
      return setErrors([error.message]);
    }
  };

  return (
    <section id="url-section">
      <form className="pt-5" onSubmit={(e) => submitURL(e)}>
        <label htmlFor="url-input" />
        <p className="text-white">Enter URL</p>
        {errors ? <ErrorBox errors={errors} /> : ""}
        <input
          id="url-input"
          type="text"
          className="rounded-md border-black border-2 w-4/5 text-center h-8"
          value={inputURL}
          onChange={(e) => setInputURL(e.target.value)}
        />
        <button
          type="submit"
          className="inline h-9 w-1/4 m-auto mt-6 ml-5 p-1 bg-white rounded-md font-bold border-black border-2 hover:bg-slate-200 active:bg-slate-400 active:text-white transition-all"
        >
          Submit
        </button>
      </form>
      {resultURL ? <URLOutput SHORT_URL={resultURL} /> : ""}
    </section>
  );
}
