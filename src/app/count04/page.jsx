"use client"
import { observer } from "mobx-react";
import React from "react";
import { action, makeObservable, observable } from "mobx";

const cntStore = observable({
  cnt: 0,
  increment: action(function() {
    this.cnt++;
  }),
  decrement: action(function() {
    this.cnt--;
  })
});

makeObservable(cntStore);

const Count04 = observer(() => {
  const handleIncrement = () => {
    cntStore.increment();
  };

  const handleDecrement = () => {
    cntStore.decrement();
  };

  return (
    <div>
      <h2>MobX 사용 (상태 관리)</h2>
      <button onClick={handleDecrement}>감소</button>
      <span style={{ margin: "0 20px" }}>{cntStore.cnt}</span>
      <button onClick={handleIncrement}>증가</button>
    </div>
  );
});

export default Count04;
