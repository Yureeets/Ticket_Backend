import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Router from "./routes/routes";
import Navbar from "./shared/layout/navbar";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
