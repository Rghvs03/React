import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouter from "./Router/AppRouter.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ErrorHandler from "./components/ErrorHandler.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ErrorHandler />
      <Toaster containerClassName="text-2xl" />
    </QueryClientProvider>
  </Provider>
);
