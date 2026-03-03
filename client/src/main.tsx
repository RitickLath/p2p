import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SocketProvider from "./contexts/socketContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SocketProvider>
      <App />
    </SocketProvider>
  </BrowserRouter>,
);
