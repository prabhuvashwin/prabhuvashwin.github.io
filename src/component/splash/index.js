import React, { useState } from 'react';
import styles from "./splash.less";
import Typed from "./typed";

const classNames = require("classnames/bind");
const cx = classNames.bind(styles);

const Splash = () => {
  const [animationIdx, setAnimationIdx] = useState(0);
  const incrementIdx = () => setAnimationIdx(currIdx => currIdx + 1);

  return (
    <section id="splash">
      <div className={ cx("splash-main-text") }>
        <div className={ cx("slim-shady") }>
          <span className={ cx("splash-main-line", "splash-line") }>
            <Typed text={ "Hi, " }
              typingSpeed={ 20 }
              startTyping={ animationIdx === 0 }
              showCursor={ animationIdx === 0 }
              typingDelay={ 2000 }
              onComplete={ incrementIdx } />
          </span>
          <span className={ cx("splash-main-line", "splash-line") }>
            <Typed text={ "My name is" }
              typingSpeed={ 20 }
              startTyping={ animationIdx === 1 }
              showCursor={ animationIdx === 1 }
              typingDelay={ 500 }
              onComplete={ incrementIdx } />
          </span>
        </div>
        <div className={ cx("name") }>
          <Typed text={ "Ashwin Venkatesh Prabhu" }
            typingSpeed={ 20 }
            startTyping={ animationIdx === 2 }
            showCursor={ animationIdx === 2 }
            typingDelay={ 100 }
            onComplete={ incrementIdx } />
        </div>
        <span className={"code-line", `${animationIdx >= 3 ? 'active' : ''}`}>
          <Typed text={ "I am a software engineer based in the San Francisco Bay Area, specializing in Front End Development, website accessibility, and user centric design." }
            typingSpeed={ 20 }
            startTyping={ animationIdx === 3 }
            showCursor={ animationIdx === 3 }
            typingDelay={ 500 }
            onComplete={ incrementIdx } />
        </span>
      </div>
    </section>
  );
};

export default Splash;
