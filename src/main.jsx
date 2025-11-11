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
        element: (
          <PrivateRoute>
            <AllMovies></AllMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/movies/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`),
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCollection",
        Component:MyCollections
      },
      {
        path:'/addMovies',
        Component: AddMovies
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
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
