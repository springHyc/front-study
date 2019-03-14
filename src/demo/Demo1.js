import React from "react";
import { useState } from "react";

export default function Demo1() {
  const [firstName, setFirstName] = useState("又青");
  const [lastName, setLastName] = useState("云");
  const [age, setAage] = useState(18);
  debugger;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>测试state中多个值的</h1>
      <div>
        <label>姓</label>
        <input value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>
      <div>
        <label>名</label>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>年龄</label>
        <input value={age} onChange={e => setAage(e.target.value)} />
      </div>
    </div>
  );
}
