import { useState } from "react";
import { registerUser, signInUser } from "../../../firebase/firebase.auth";
import ErrorBox from "../../error/ErrorBox";
import "./loginForm.css";

const INPUT_CLASSES = "block m-auto rounded-md w-4/5 p-1 mt-2 mb-2 text-center";
const LOGIN_BUTTONS =
  "inline h-9 w-36 m-auto mt-3 p-1 bg-white rounded-md font-bold border-black border-2 hover:bg-slate-200 active:bg-slate-400 active:text-white transition-all";

export default function LoginForm() {
  const [errors, setErrors] = useState([]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!validateForm(e.target)) return;
    const EMAIL = e.target.EMAIL.value;
    const PASSWORD = e.target.PASSWORD.value;

    const TYPE = document.activeElement.name;

    if (TYPE === "register") {
      if (await registerUser({ EMAIL: EMAIL, PASSWORD: PASSWORD }, setErrors)) {
        alert("Success!");
      }
    } else {
      if (await signInUser(EMAIL, PASSWORD, setErrors)) {
        alert("Success!");
      }
    }
  }

  function validateForm(target) {
    const newErrors = [];
    setErrors([]);
    const { EMAIL, PASSWORD } = target;
    if (!EMAIL || !PASSWORD) {
      checkFields({ EMAIL, PASSWORD }, newErrors);
      setErrors(newErrors);
      return false;
    }
    return true;
  }

  return (
    <section id="login-form-section">
      {errors.length >= 1 ? <ErrorBox errors={errors} /> : ""}
      <form id="login-form" onSubmit={(e) => handleFormSubmit(e)}>
        <label>
          <p className="text-white">Email:</p>
          <input name="EMAIL" type="email" className={INPUT_CLASSES} />
        </label>
        <label>
          <p className="text-white">Password:</p>
          <input name="PASSWORD" type="password" className={INPUT_CLASSES} />
        </label>
        <button name="login" className={LOGIN_BUTTONS}>
          Log in
        </button>
        <button name="register" className={LOGIN_BUTTONS}>
          Register
        </button>
      </form>
    </section>
  );
}

function checkFields({ EMAIL, PASSWORD }, newErrors) {
  newErrors.length = 0;
  if (!EMAIL) {
    newErrors.push("Email is required");
  }
  if (!PASSWORD) {
    newErrors.push("Password is required");
  }
}
