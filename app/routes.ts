import {
  type RouteConfig,
  index,
  layout,
  route
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  layout("layouts/movies.tsx", [
    route("movies", "routes/movies.tsx"),
    route("movies/:movieId", "routes/movieDetail.tsx")
  ])
] satisfies RouteConfig;
