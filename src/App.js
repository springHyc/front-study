import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HooksDemo from "./hooks-demo";
import RouteDemo from "./route-demo";
import Header from "./route-demo/header";
import "./App.css";
import HelloWorldDemo from "./hello-world-demo";

function Home() {
  return <h2>Home</h2>;
}
function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/hello-world-demo" component={HelloWorldDemo} />
        <Route path="/hooks-demo" component={HooksDemo} />
        <Route path="/route-demo" component={RouteDemo} />
      </div>
    </Router>
  );
}

export default App;
