import { auth } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AccountPage() {
  const [user, loading] = useAuthState();

  if (loading) return <h2>Loading...</h2>;

  return (
    <section id="account-page">
      {user ? (
        <section id="account">Signed in</section>
      ) : (
        <section id="register-login-buttons">
          <p>Not signed in</p>
        </section>
      )}
    </section>
  );
}
