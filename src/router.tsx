import { createBrowserRouter } from "react-router-dom";
import Layout from "./ui/layout/layout";
import Editor from "./ui/views/editor";
import Settings from "./ui/views/settings";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Editor />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);