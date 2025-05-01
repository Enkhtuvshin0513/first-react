import { Link, Outlet } from "react-router";

export default function MovieLayout() {
  return (
    <div>
      <h1>Movies </h1>
      <Link to="/">go home</Link>
      <Outlet />
    </div>
  );
}
