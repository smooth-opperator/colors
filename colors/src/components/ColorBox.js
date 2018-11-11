import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import rgbHex from 'rgb-hex';

import max255 from '../utils/max255';
import styles from './ColorGrid.scss';

function ColorBox() {
  const boxEl = useRef(null);
  const [divStyle, setDivStyle] = useState({ backgroundColor: '#000000' })

  const handleMouseEnter = () => {
    const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
    const newColor = ['#', rgbHex(max255(coords.y / 5), max255(coords.x / 5), max255(coords.y % coords.x * 2))].join('')
    setDivStyle({ backgroundColor: newColor })
  };

  return (
    <div 
      className={styles.box} 
      ref={boxEl} 
      style={divStyle} 
      onMouseEnter={handleMouseEnter} 
    />
  );
};

export default ColorBox;
