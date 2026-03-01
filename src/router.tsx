import { createBrowserRouter } from "react-router-dom";
import Layout from "./ui/layout/layout";
import { History, Home } from "./ui";



export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/theme",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History/>,
      },
    ],
  },
]);