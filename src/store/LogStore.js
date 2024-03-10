import { makeAutoObservable } from "mobx";

class LogStore {
  log = [];

  constructor() {
    makeAutoObservable(this);
  }

  setLog(newLog) {
    this.log = newLog;
  }

  clearLog() {
    this.log = [];
  }
}

const logStore = new LogStore();
export default logStore;
