export default function URLBar() {
  return (
    <section id="url-section">
      <form className="p-10">
        <label htmlFor="url-input" />
        <p>Enter URL</p>
        <input type="text" className="rounded-md w-4/5" required />
      </form>
    </section>
  );
}
