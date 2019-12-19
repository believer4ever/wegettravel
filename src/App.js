import React from "react";
import Main from "./screen/main";
import Hotels from "./screen/hotels";
import "./App.css";
import "./media.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    // <Router>
      <div className="App">
      <Hotels />
      {/* <Switch>
        <Route exact path="/" component={Main} />>
        <Route path="/hotel" component={Hotels} />
      </Switch> */}
      </div>
    // </Router>
  );
}

export default App;
