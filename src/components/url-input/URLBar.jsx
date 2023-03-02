export default function URLBar() {
  return (
    <section id="url-section">
      <form>
        <label htmlFor="url-input">
          Enter URL:
          <input type="text" required />
        </label>
      </form>
    </section>
  );
}
