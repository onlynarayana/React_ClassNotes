// import logo from "./logo.svg";
// import "./App.css";
import Button from "./Component/App1item/Button/Button";
// import Header from "./Component/Header/Header"; // import from main file
import Header from "./Component/App1item/Header"; // import from index file
import Nav from "./Component/App1item/Nav/Nav";
import { Image } from "./Component/App1item/Image/Image"; // named import

function App1() {
  return (
    <main>
      <Header />
      <Button />
      <Nav />
      <Image />
    </main>
  );
}

export default App1;
