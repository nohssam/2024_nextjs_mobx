"use client"
import { observer } from "mobx-react";
import React from "react";
import counterStore from "../store/CountStore";

const Count03 = observer(() => {
  const handleIncrement = () => {
    counterStore.increment();
  };

  const handleDecrement = () => {
    counterStore.decrement();
  };

  return (
    <div>
      <h2>MobX 사용 (상태 관리)</h2>
      <button onClick={handleDecrement}>감소</button>
      <span style={{ margin: "0 20px" }}>{counterStore.cnt}</span>
      <button onClick={handleIncrement}>증가</button>
    </div>
  );
});

export default Count03;