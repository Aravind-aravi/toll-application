import "./App.css";
import TollForm from "./components/Form";
import TollNav from "./components/Nav";
import History from "./components/History";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        {" "}
        <TollNav />
        <Redirect to="/home" />
        <Route path="/home" component={TollForm} />
        <Route path="/history" component={History} />
        <Route path="/about">{/* <About /> */}</Route>
      </Router>
    </>
  );
}

export default App;
