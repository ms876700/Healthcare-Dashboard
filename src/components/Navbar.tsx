import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">Healthcare Admin Panel</h1>

      <div className="flex gap-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Dashboard
        </NavLink>
        <Link to="/analytics">Analytics</Link>
        <Link to="/patients">Patients</Link>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
