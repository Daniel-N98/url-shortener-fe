import "./errorBox.css";

export default function ErrorBox({ errors }) {
  return (
    <section
      id="error-box-section"
      className="bg-red-400 w-4/5 m-auto rounded-md p-3 mt-6 text-red-900"
    >
      <p className="font-bold underline mb-2">
        Please resolve the following issue(s)
      </p>
      <ul>
        {errors?.map((error) => {
          return (
            <li key={error} className="list-disc w-3/4 m-auto break-words mt-2">
              {error}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
