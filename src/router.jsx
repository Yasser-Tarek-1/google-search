import { createBrowserRouter } from "react-router-dom";
import Result from "./components/Result";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: ":pageName",
        element: <Result />,
      },
    ],
  },
]);
