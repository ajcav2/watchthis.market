import { Button } from "@mui/material";
import Navbar from "../navbar/Navbar";
import logo from "../../logo.svg";

export default function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Button
          variant="contained"
          onClick={() => console.log("Hello, world!")}
        >
          Hello
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
