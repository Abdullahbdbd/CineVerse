import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import AllMovies from "./pages/AllMovies/AllMovies.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Login from "./pages/Login/Login.jsx";
import AuthProvider from "./context/AuthProvider/AuthProvider.jsx";
import Register from "./pages/Register/Register.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute.jsx";
import MyCollections from "./pages/MyCollection/MyCollections.jsx";
import AddMovies from "./pages/AddMovie/AddMovies.jsx";
import UpdateMovies from "./pages/UpdateMovie/UpdateMovies.jsx";
import Profile from "./pages/Profile/Profile.Jsx";
import Watchlist from "./pages/Watchlist/Watchlists.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/movies",
        Component: AllMovies,
      },
      {
        path: "/movies/:id",
        loader: async ({ params }) => {
          const res = await fetch(`https://cineverse-server-rosy.vercel.app/movies/${params.id}`);
          const movie = await res.json();

          if (!res.ok || !movie?._id)
            throw new Response("Movie not found", { status: 404 });

          return movie;
        },
        element: <MovieDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/myCollection",
        element: (
          <PrivateRoute>
            <MyCollections></MyCollections>
          </PrivateRoute>
        ),
      },
      {
        path: "/movies/update/:id",
        loader: ({ params }) =>
          fetch(`https://cineverse-server-rosy.vercel.app/movies/update/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateMovies></UpdateMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/addMovies",
        element: (
          <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/watchList",
        Component: Watchlist,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
