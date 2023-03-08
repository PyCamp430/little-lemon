import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
