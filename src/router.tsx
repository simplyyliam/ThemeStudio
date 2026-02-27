import { createBrowserRouter } from "react-router-dom";
import Layout from "./ui/layout/layout";
import Editor from "./ui/views/editor";
import { History } from "./ui";



export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Editor />,
      },
      {
        path: "/theme",
        element: <Editor/>,
      },
      {
        path: "/history",
        element: <History/>,
      },
    ],
  },
]);