import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import AboutUs from "./Components/About/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <Contact />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
