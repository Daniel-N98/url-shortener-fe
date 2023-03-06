import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

export default function AccountPage() {
  const [user, loading] = useAuthState(auth);

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
