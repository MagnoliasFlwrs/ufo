import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import MainLayout from "./routes/MainLayout.jsx";
import GetStartedLayout from "./routes/GetStartedLayout.jsx";
import theme from "./theme/theme";
import "./index.css";
import "./styles/main.scss";
import { PaddleCheckout } from "./components/Paddle/PaddleCheckout.jsx";

// eslint-disable-next-line react-refresh/only-export-components
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
    {
      path: "/subscribe",
      element: <PaddleCheckout />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
