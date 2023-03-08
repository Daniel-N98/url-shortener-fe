import "./urlOutput.css";

export default function URLOutput({ SHORT_URL }) {
  const URL = `https://urlshrtr.netlify.app/${SHORT_URL}`;
  return (
    <section
      id="url-output-section"
      className="bg-green-500 w-auto m-auto rounded-md p-3 mt-6 text-green-900 underline"
    >
      <p className="font-bold mb-4">Success, shortened URL below</p>
      <div
        id="url-container"
        className="bg-slate-200 p-1 pt-2 pb-2 rounded-md text-blue-700 underline text-xs"
      >
        <a href={URL}>{URL}</a>
      </div>
    </section>
  );
}
