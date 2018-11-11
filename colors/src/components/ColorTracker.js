import React, { useState, useEffect } from 'react';
import rgbHex from 'rgb-hex';

import max255 from '../utils/max255';
import styles from './ColorTracker.scss';

function useMousePosition() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    function handleWindowMouseMove(e) {
      setPosition({ left: e.pageX, top: e.pageY });
    }

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);
  return position;
}

function ColorTracker () {
  const position = useMousePosition();

  const divStyle = { 
    backgroundColor: ['#', rgbHex(max255(position.top), max255(position.left), max255(position.left % position.top))].join('')
  };

  return (
    <div className={styles.container} style={ divStyle }>
      <div className={styles.content}>
        <div className={styles.title}>Position:</div>
        <div>left:{position.left}</div>
        <div>top:{position.top}</div>
        <div className={styles.title}>Color:</div> 
        <div>{divStyle.backgroundColor}</div>
      </div>
    </div>
  );
};

export default ColorTracker;
