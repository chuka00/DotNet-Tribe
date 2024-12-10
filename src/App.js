import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
