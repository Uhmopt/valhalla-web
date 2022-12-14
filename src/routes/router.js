import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/pages/errors/ErrorPage";
import Home from "../views/pages/home";
import News from "../views/pages/news";
import NewsDetail from "../views/pages/news/NewsDetail";
import Root from "../views/pages/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsDetail /> },
    ],
  },
]);
