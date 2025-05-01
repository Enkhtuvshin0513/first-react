import { Link } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Movie app" }];
}

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  console.log("--");

  return (
    <div>
      <h1>Movie </h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        button
      </button>

      <Link to="movies">Movies</Link>
      <Link to="aothors">Authors</Link>
    </div>
  );
}
