import { makeAutoObservable } from "mobx";

class ColorStore {
  white = "";
  dark = "";
  light = "";

  constructor() {
    makeAutoObservable(this);
  }

  setNewScheme(white, dark, light) {
    this.white = white;
    this.dark = dark;
    this.light = light;
  }

  setDarkTheme() {
    this.white = "#F8F9FA";
    this.dark = "#0F0F0F";
    this.light = "#008170";
  }

  setLightTheme() {
    this.white = "#0F0F0F";
    this.dark = "#F8F9FA";
    this.light = "#FA8D75";
  }
}

const colorStore = new ColorStore();
export default colorStore;
