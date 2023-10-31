import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/Others/About/About";
import Work from "./Components/Others/Other/Work";
import Testimonial from "./Components/Others/Other/Testimonial";
import Contact from "./Components/Others/Contact/Contact";
import Footer from "./Components/Shared/Footer/Footer";
import Slogan from "./Components/Others/Other/Slogan";
import Products from "./Components/Products/Products";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Products/>
      <Testimonial />
      <Slogan />
      <Reviews/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
