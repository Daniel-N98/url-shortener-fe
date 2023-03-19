import { Link } from "react-router-dom";

export default function NavBar() {
  const LINK_CLASSES =
    "text-blue-300 font-bold hover:underline hover:text-white active:text-slate-300";
  return (
    <section id="nav-bar-section">
      <nav>
        <ul className="w-2/3 m-auto mb-8 flex justify-center gap-6">
          <Link to="/home" className={LINK_CLASSES}>
            Home
          </Link>
          <Link to="/account" className={LINK_CLASSES}>
            Account
          </Link>
        </ul>
      </nav>
    </section>
  );
}
