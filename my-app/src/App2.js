import "./App2.css";
import Footer from "./Component/App2items/Footer";
import Heading from "./Component/App2items/Heading";
import Main from "./Component/App2items/Main";
import Sidebar from "./Component/App2items/Sidebar";

// User Interface of any App with different Components : -

function App2() {
  return (
    <div className="container">
      <Heading />
      <div className="main-container">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App2;
