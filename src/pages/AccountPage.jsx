import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import LoginForm from "../components/user/login/LoginForm";

export default function AccountPage() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h2>Loading...</h2>;

  return (
    <section id="account-page">
      {user ? (
        <section id="account">Signed in</section>
      ) : (
        <section id="register-login-buttons">
          <LoginForm />
        </section>
      )}
    </section>
  );
}
