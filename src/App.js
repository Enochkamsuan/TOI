import "./App.css";
import Home from "./home/home";
import Footer from "./navigation/footer/footer";
import Header from "./navigation/header/header";

function App() {
  return (
    <div className="px-3 sm:px-15 md:px-24 lg:px-26">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
