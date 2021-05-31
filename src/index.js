import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.less";

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Ashwin" />, mountNode);
