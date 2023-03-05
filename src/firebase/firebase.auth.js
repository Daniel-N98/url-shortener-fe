import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export function registerUser({ EMAIL, PASSWORD }, setErrors) {
  createUserWithEmailAndPassword(auth, EMAIL, PASSWORD)
    .then(() => {
      const user = auth.currentUser;
    })
    .catch((error) => {
      setErrors([error.code]);
      return false;
    });
}
