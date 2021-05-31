import React, { useState, useEffect } from "react";

const Typed = props => {
  const {
    typingSpeed,
    startTyping,
    showCursor,
    typingDelay = 0,
    text,
    onComplete
  } = props;

  const [textIdx, setIdx] = useState(0);
  const [isTyping, setTyping] = useState(false);
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    if (startTyping) {
      setTimeout(() => {
        setTyping(true);
        setIdx(currIdx => currIdx + 1);
      }, typingDelay);
    }
  }, [startTyping, typingDelay]);

  useEffect(() => {
    if (textIdx <= text.length && textIdx > 0) {
      setTimeout(() => {
        setIdx(currIdx => currIdx + 1);
      }, typingSpeed);
    }

    if (textIdx > text.length && !isComplete) {
      setTyping(false);
      setComplete(true);
      onComplete && onComplete();
    }
  }, [textIdx, text, typingSpeed, isComplete, onComplete]);

  return (
    <>
      {
        text.slice(0, textIdx)
      }
      {
        showCursor
          ? <div className={ `cursor ${isTyping ? '' : 'flash'}` }
              dangerouslySetInnerHTML={{ __html: '&block;' }} />
          : null
      }
    </>
  );
};

export default Typed;
