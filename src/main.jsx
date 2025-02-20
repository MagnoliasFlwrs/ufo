import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./routes/MainLayout.jsx";
import GetStartedLayout from "./routes/GetStartedLayout.jsx";
import { createRoot } from "react-dom/client";

import "./styles/main.scss";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
    },
    {
      path: "/get-started",
      element: <GetStartedLayout />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
