import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";

const Header = () => {
  return <h1>My header</h1>;
};
function App() {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
