import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import LoginForm from "../components/user/login/LoginForm";
import { signOut } from "firebase/auth";

export default function AccountPage() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h2>Loading...</h2>;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <section id="account-page">
      {user ? (
        <section id="account">
          <p>Signed in</p>
          <button
            className="block m-auto rounded-md w-4/5 p-1 mt-2 mb-2 text-center"
            onClick={() => handleSignOut()}
          >
            Sign out
          </button>
        </section>
      ) : (
        <section id="register-login-buttons">
          <LoginForm />
        </section>
      )}
    </section>
  );
}
