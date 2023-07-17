import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <App />
    </HashRouter>
  </QueryClientProvider>
);
