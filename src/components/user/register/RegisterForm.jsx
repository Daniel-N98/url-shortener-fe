import { useState } from "react";
import { registerUser } from "../../../firebase/firebase.auth";
import ErrorBox from "../../error/ErrorBox";
import "../login/loginForm.css";

const INPUT_CLASSES = "block m-auto rounded-md w-4/5 p-1 mt-2 mb-2 text-center";

export default function RegisterForm() {
  const [errors, setErrors] = useState([]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!validateForm(e.target)) return;

    const { EMAIL, PASSWORD } = e.target;
    if (
      await registerUser(
        { EMAIL: EMAIL.value, PASSWORD: PASSWORD.value },
        setErrors
      )
    ) {
      alert("Success!");
    }
  }

  function validateForm(target) {
    const newErrors = [];
    setErrors([]);
    const { EMAIL, PASSWORD, CONFIRM_PASSWORD } = target;
    if (!EMAIL.value || !PASSWORD.value || !CONFIRM_PASSWORD.value) {
      checkFields({ EMAIL, PASSWORD, CONFIRM_PASSWORD }, newErrors);
      setErrors(newErrors);
      return false;
    } else {
      if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
        setErrors((currentErrors) => [
          ...currentErrors,
          "Passwords do not match",
        ]);
        return false;
      }
      return true;
    }
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
        <label>
          <p className="text-white">Confirm Password:</p>
          <input
            name="CONFIRM_PASSWORD"
            type="password"
            className={INPUT_CLASSES}
          />
        </label>
        <button className="inline h-9 w-36 m-auto mt-3 p-1 bg-white rounded-md font-bold border-black border-2 hover:bg-slate-200 active:bg-slate-400 active:text-white transition-all">
          Log in
        </button>
      </form>
    </section>
  );
}

function checkFields({ EMAIL, PASSWORD, CONFIRM_PASSWORD }, newErrors) {
  newErrors.length = 0;
  if (!EMAIL.value) {
    newErrors.push("Email is required");
  }
  if (!PASSWORD.value) {
    newErrors.push("Password is required");
  }
  if (!CONFIRM_PASSWORD.value) {
    newErrors.push("Password must be confirmed");
  }
}
