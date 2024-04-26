import { action, makeObservable, observable } from "mobx";

class CounterStore {
  cnt = 0;

  constructor(){
    makeObservable(this, {
        cnt: observable,
        increment: action.bound,
        decrement: action.bound
    });
  }

  increment() {
      this.cnt++;
  }

  decrement() {
      this.cnt--;
  }
}

const counterStore = new CounterStore();
export default counterStore;
