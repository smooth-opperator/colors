import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import rgbHex from 'rgb-hex';

import max255 from '../utils/max255';
import styles from './ColorGrid.scss';

function ChangingBox() {
  const boxEl = useRef(null);
  const [divStyle, setDivStyle] = useState({ backgroundColor: '#000000' })

  const colorMethod = () => {
    const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
    const newColor = ['#', rgbHex(max255(coords.x / 5), max255(coords.x / 5), max255(coords.x / 5))].join('')
    setDivStyle({ backgroundColor: newColor })
  };

  const colorMethod2 = () => {
    const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
    const newColor = ['#', rgbHex(max255(coords.y / 5), max255(coords.y / 5), max255(coords.y / 5))].join('')
    setDivStyle({ backgroundColor: newColor })
  };

  let activeColorMethod = colorMethod;

  useEffect(() => {
    if (boxEl) {
      activeColorMethod()
    }
  }, boxEl);

  const handleMouseEnter = () => {
    activeColorMethod = activeColorMethod === colorMethod ? colorMethod2 : colorMethod
    activeColorMethod()
  }

  return (
    <div
      className={styles.box}
      ref={boxEl}
      style={divStyle}
      onMouseEnter={handleMouseEnter}
    />
  );
};

export default ChangingBox;
