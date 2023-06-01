import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen max-w-full p-0 m-0">
        <Header />
        <main className="container max-w-full">
          <AppRoutes />
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
