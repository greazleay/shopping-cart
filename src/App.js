import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
