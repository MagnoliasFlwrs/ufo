import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { useUserStore } from "./store/store.js";
import { useEffect } from "react";
import MainLayout from "./routes/MainLayout.jsx";
import GetStartedLayout from "./routes/GetStartedLayout.jsx";
import theme from "./theme/theme";
import SubscribeLayout from "./routes/SubscribeLayout.jsx";
import "./index.css";
import "./styles/fonts.css";
import "./styles/main.scss";
import TermsOfUse from "./routes/TermsOfUse.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import CancellationRefundPolicy from "./routes/CancellationRefundPolicy.jsx";
import EmailSubscribeLayout from "./routes/EmailSubscribeLayout.jsx";

// loggerer for store state changes
const StoreLogger = () => {
  const state = useUserStore((state) => state);

  useEffect(() => {
    // console.log("Store state updated:", state);
    // console.log("Customer data:", state.customerData);
  }, [state]);

  return null;
};

const App = () => {
  const routes = [
    { path: "/", element: <MainLayout /> },
    { path: "/get-started", element: <GetStartedLayout /> },
    { path: "/email-subscribe", element: <EmailSubscribeLayout /> },
    { path: "/subscribe", element: <SubscribeLayout /> },
    { path: "/terms-of-use", element: <TermsOfUse /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/cancellation-refund-policy", element: <CancellationRefundPolicy /> },

    { path: "*", element: <MainLayout /> }, // Default route
  ];

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <StoreLogger />
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
