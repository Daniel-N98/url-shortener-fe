import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import LoginForm from "../components/user/login/LoginForm";
import { signOut } from "firebase/auth";
import PreviousURLs from "../components/user/PreviousURLs/PreviousURLs";

export default function AccountPage() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h2>Loading...</h2>;

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <section id="account-page">
      {user ? (
        <section id="account">
          <PreviousURLs />
          <button
            className="inline h-9 w-36 m-auto p-1 bg-white rounded-md font-bold border-black border-2 hover:bg-slate-200 active:bg-slate-400 active:text-white transition-all"
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
