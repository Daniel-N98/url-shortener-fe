import { useState } from "react";

export default function URLBar() {
  const [inputURL, setInputURL] = useState("");

  const submitURL = (e) => {
    e.preventDefault();
    console.log(inputURL);
  };

  return (
    <section id="url-section">
      <form className="pt-10" onSubmit={(e) => submitURL(e)}>
        <label htmlFor="url-input" />
        <p className="text-white mb-6">Enter URL</p>
        <input
          type="text"
          className="rounded-md w-4/5 text-center"
          required
          onChange={(e) => setInputURL(e.target.value)}
        />
        <button type="submit" className="block m-auto mt-6 p-1 bg-white w-1/4">
          Submit
        </button>
      </form>
    </section>
  );
}
