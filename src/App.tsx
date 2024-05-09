import "./App.css";
import Body from "./compunets/Body/Body";
import Nav from "./compunets/Header/Nav";

function App() {
  return (
    <>
      <div className="main-container">
        <Nav />
        <Body />
      </div>
    </>
  );
}

export default App;
