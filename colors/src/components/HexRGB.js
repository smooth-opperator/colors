import React, { useState } from 'react';

import hexRgb from'hex-rgb';

import styles from './HexRGB.scss';

function isValid(hex) {
  const hexChars = 'a-f\\d';
  const match3or4Hex = `#?[${hexChars}]{3}[${hexChars}]?`;
  const match6or8Hex = `#?[${hexChars}]{6}([${hexChars}]{2})?`;

  const nonHexChars = new RegExp(`[^#${hexChars}]`, 'gi');
  const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

  return hex && typeof hex === 'string' && !nonHexChars.test(hex) && validHexSize.test(hex)
};

function HexRgb() {
  const [hex, setHex] = useState('#')
  const [rgba, setrgba] = useState({ red: null, green: null, blue: null, alpha: null })

  function handleHexChange(e) {
    setHex(e.target.value)

    if (isValid(e.target.value)) {
      setrgba(hexRgb(e.target.value))
    } else {
      setrgba({ red: null, green: null, blue: null, alpha: null })
    }
  };

  const divStyle = {
    backgroundColor: isValid(hex) ? hex : '#000000',
  };

  return (
    <div className={styles.container}>
      <div className={styles.content} style={divStyle} />
      <div className={styles.inputSection}>
        <label htmlFor="hex" className={styles.label}>
          <span>Hex:</span>
          <input
            id="hex"
            minLength={3}
            maxLength={9}
            className={styles.input}
            type="string"
            value={hex}
            onChange={handleHexChange}
          />
        </label>
        <div className={styles.rgbaVals}>
          <div className={styles.title}>Color:</div>
          <div>R: {rgba.red}</div>
          <div>G: {rgba.green}</div>
          <div>B: {rgba.blue}</div>
          <div>a: {rgba.alpha}</div>
        </div>
      </div>
    </div>
  );
};

export default HexRgb;
