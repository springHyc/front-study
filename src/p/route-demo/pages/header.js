import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./logo.jpg";
export default function Header() {
  return (
    <div className="left-side">
      <div className="logo">
        <img src="logo.jpg" height="20" width="20" alt="图标" />
        学习ReactDemo
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello-world-demo">hello-world-demo</Link>
        </li>
        <li>
          <Link to="/hooks-demo">HooksDemo</Link>
        </li>
        <li>
          <Link to="/route-demo">路由demo</Link>
        </li>
      </ul>
    </div>
  );
}
