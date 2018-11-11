import React, { useState } from 'react';
import rgbHex from 'rgb-hex';

import max255 from '../utils/max255';
import styles from './RGBHex.scss';

function RGBHex() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function handleRedChange(e) {
    const newVal = max255(parseInt(e.target.value, 10))
    setRed(newVal);
  };

  function handleGreenChange(e) {
    const newVal = max255(parseInt(e.target.value, 10))
    setGreen(newVal);
  };

  function handleBlueChange(e) {
    const newVal = max255(parseInt(e.target.value, 10))
    setBlue(newVal);
  };

  const divStyle = {
    backgroundColor: ['#', rgbHex(red, green, blue)].join('')
  };

  return (
    <div className={styles.container}>
      <div className={styles.content} style={divStyle}>
        <div className={styles.title}>Color:</div>
        <div>{divStyle.backgroundColor}</div>
      </div>
      <div className={styles.inputSection}>
        <label htmlFor="red" className={styles.label}>
          <span className={styles.red}>Red:</span>
          <input 
            id="red" 
            className={styles.input}
            type="number" 
            min={0} 
            max={255} 
            value={red} 
            onChange={handleRedChange} 
          />
        </label>

        <label htmlFor="green" className={styles.label}>
          <span className={styles.green}>Green:</span>
          <input 
            id="green" 
            className={styles.input}
            type="number" 
            min={0} 
            max={255} 
            value={green} 
            onChange={handleGreenChange} 
          />
        </label>

        <label htmlFor="blue" className={styles.label}>
          <span className={styles.blue}>Blue:</span>
          <input 
            id="blue"
            type="number"
            className={styles.input}
            min={0} 
            max={255} 
            value={blue} 
            onChange={handleBlueChange} 
          />
        </label>
      </div>
    </div>
  );
};

export default RGBHex;
