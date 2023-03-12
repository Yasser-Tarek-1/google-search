import { createBrowserRouter } from "react-router-dom";
import Result from "./pages/Result";
import Images from "./pages/Images";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Result />,
      },
      {
        path: "images",
        element: <Images />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
    ],
  },
]);
