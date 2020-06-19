import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import HooksDemo from "./hooks-demo";
import RouteDemo from "./route-demo";
import Header from "./route-demo/header";
import "./App.css";

function Home() {
  return <h2>Home</h2>;
}
function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/hooks-demo" component={HooksDemo} />
        <Route path="/route-demo" component={RouteDemo} />
      </div>
    </Router>
  );
}

export default App;
