import logo from './logo.svg';
import './App.css';
import about from "./pages/about";
import homepage from "./pages/homepage";
import topbar from "./pages/topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <homepage />
        </Route>
        <Route path="/about">
        <Route path="/homepage">
        <Route path="/topbar">
          <Homepage />
        </Route>
      </Switch>
    </Router>

}

export default App;
