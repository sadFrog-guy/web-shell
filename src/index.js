import { observer } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import colorStore from "./store/ColorStore";

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Consolas, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: ${({ store, ...props }) => props.color || store.dark};
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = observer(() => (
  <React.StrictMode>
    <Global store={colorStore} />
    <App />
  </React.StrictMode>
));

root.render(<RootComponent />);
