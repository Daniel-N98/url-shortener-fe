import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function registerUser({ EMAIL, PASSWORD }, setErrors) {
  return createUserWithEmailAndPassword(auth, EMAIL, PASSWORD)
    .then(() => {
      const user = auth.currentUser;
      return true;
    })
    .catch((error) => {
      setErrors([error.code]);
      return false;
    });
}
