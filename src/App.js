import React from 'react';
import { hot } from "react-hot-loader/root";
import { Splash } from "./component";
import styles from "./styles.less";

const classNames = require("classnames/bind");
const cx = classNames.bind(styles);

const App = () => {
  return (
    <>
      <a href="#about" className={ cx("skipnav") }>Skip to main content</a>

      <main>
        <Splash />
      </main>
    </>
  );
};

export default hot(App);
