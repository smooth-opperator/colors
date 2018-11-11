import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import rgbHex from 'rgb-hex';

import max255 from '../utils/max255';
import styles from './ColorGrid.scss';

function ChangingBox() {
  const boxEl = useRef(null);
  const [divStyle, setDivStyle] = useState({ backgroundColor: '#000000' })

  const colorMethods = [
    () => {
      const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
      const newColor = ['#', rgbHex(max255(coords.y / 5), max255(coords.x / 5), max255(coords.y % coords.x * 2))].join('')
      setDivStyle({ backgroundColor: newColor })
    }, () => {
      const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
      const newColor = ['#', rgbHex(max255(coords.x / 5), max255(coords.y / 5), max255(coords.x % coords.y * 2))].join('')
      setDivStyle({ backgroundColor: newColor })
    }, () => {
      const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
      const newColor = ['#', rgbHex(max255(coords.x % coords.y * 2), max255(coords.x / 5), max255(coords.y / 5))].join('')
      setDivStyle({ backgroundColor: newColor })
    }, () => {
      const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
      const newColor = ['#', rgbHex(max255(coords.x / 5), max255(coords.x % coords.y / 2), max255(coords.y / 5))].join('')
      setDivStyle({ backgroundColor: newColor })
    }, () => {
      const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
      const newColor = ['#', rgbHex(max255(coords.y / 5), max255(coords.y / 5), max255(coords.y / 5))].join('')
      setDivStyle({ backgroundColor: newColor })
    }, () => {
      const coords = ReactDOM.findDOMNode(boxEl.current).getBoundingClientRect()
      const newColor = ['#', rgbHex(max255(coords.x / 5), max255(coords.x / 5), max255(coords.x / 5))].join('')
      setDivStyle({ backgroundColor: newColor })
    },
  ]

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  useEffect(() => {
    if(boxEl) {
      const index = getRandomInt(0, 6);
      colorMethods[index]()
    }
  });

  return (
    <div
      className={styles.box}
      ref={boxEl}
      style={divStyle}
    />
  );
};

export default ChangingBox;
