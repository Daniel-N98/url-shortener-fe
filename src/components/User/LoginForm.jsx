import "./loginForm.css";

export default function LoginForm() {
  const INPUT_CLASSES =
    "block m-auto rounded-md w-4/5 p-1 mt-2 mb-2 text-center";
  function handleFormSubmit(e) {
    e.preventDefault();
    const EMAIL = e.target.email.value;
    const PASSWORD = e.target.password.value;
  }

  return (
    <section id="login-form-section">
      <form id="login-form" onSubmit={(e) => handleFormSubmit(e)}>
        <label>
          <p className="text-white">Email:</p>
          <input name="email" type="email" className={INPUT_CLASSES} />
        </label>
        <label>
          <p className="text-white">Password:</p>
          <input name="password" type="password" className={INPUT_CLASSES} />
        </label>
        <button className="inline h-9 w-36 m-auto mt-3 p-1 bg-white rounded-md font-bold border-black border-2 hover:bg-slate-200 active:bg-slate-400 active:text-white transition-all">
          Log in
        </button>
      </form>
    </section>
  );
}
