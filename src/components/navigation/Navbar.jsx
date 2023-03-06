import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section id="nav-bar-section">
      <nav>
        <ul className="w-1/3 m-auto mb-20">
          <Link
            to="/home"
            className="text-blue-300 font-bold m-3 underline hover:text-white active:text-slate-300"
          >
            Home
          </Link>
          <Link to="/account" className="text-blue-300 font-bold m-3">
            Account
          </Link>
        </ul>
      </nav>
    </section>
  );
}
