import { createBrowserRouter } from "react-router-dom";
import ProtectedRouts from "./components/ProtectedRouts";
import Result from "./components/Result";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouts>
        <Root />
      </ProtectedRouts>
    ),
    children: [
      {
        path: ":pageName",
        element: <Result />,
      },
    ],
  },
]);
