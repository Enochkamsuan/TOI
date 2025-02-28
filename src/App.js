import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "../src/component/navigation/footer/footer";
import Header from "../src/component/navigation/header/header";
import RoutePage from "./config/routes/routes";

function App() {
  return (
    <div className="px-3 sm:px-15 md:px-24 lg:px-26">
      <BrowserRouter>
        <Header />
        <RoutePage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
