import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import rgbHex from 'rgb-hex';

import max255 from '../utils/max255';
import styles from './ColorGrid.scss';

function RecoloringBox() {
  const boxEl = useRef(null);
  const [divStyle, setDivStyle] = useState({ backgroundColor: '#000000' })

  const colorTheBoxes = () => {
    const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
    const newColor = ['#', rgbHex(max255(coords.y / 5), max255(coords.x / 5), max255(coords.y % coords.x * 2))].join('')
    setDivStyle({ backgroundColor: newColor })
  };

  const newColorTheBoxes = () => {
    const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
    const newColor = ['#', rgbHex(max255(coords.x / 5), max255(coords.y / 5), max255(coords.x % coords.y * 2))].join('')
    setDivStyle({ backgroundColor: newColor })
  }

  useEffect(() => {
    boxEl && colorTheBoxes()
  }, [boxEl]); // Only re-run the effect if boxEl changes (only run it once!) 

  const handleMouseEnter = () => {
    newColorTheBoxes()
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

export default RecoloringBox;
