import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function Header() {
  return (
    <div className="left-side">
      <div className="logo">
        <img src="logo.jpg" height="20" width="20" />
        学习ReactDemo
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
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
