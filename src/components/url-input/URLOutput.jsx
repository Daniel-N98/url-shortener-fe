export default function URLOutput({ SHORT_URL }) {
  const URL = `https://incomparable-seahorse-f9d25e.netlify.app/${SHORT_URL}`;
  return (
    <section id="url-output-section">
      <p>
        Here's your shortened URL <a href={URL}>{URL}</a>
      </p>
    </section>
  );
}
