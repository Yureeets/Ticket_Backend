import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Router from "./routes/routes";
import Navbar from "./shared/layout/navbar";
import { BrowserRouter } from "react-router-dom";
import Navdown from "./shared/layout/navdown";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="app-wrapper">
          <Navbar />
          <div className="content">
            <Router />
          </div>
          <Navdown />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
