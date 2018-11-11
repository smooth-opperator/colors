import React from 'react';

import ChangingBox from './ChangingBox';
import ColorBox from './ColorBox';
import RecoloringBox from './RecoloringBox';
import GreyScale from './GrayScale';
import styles from './ColorGrid.scss';

function ColorGrid({ type }) {
  let BoxComponent = ColorBox;

  if (type === 'recoloringGrid') BoxComponent = RecoloringBox
  if (type === 'changingGrid') BoxComponent = ChangingBox
  if (type === 'greyscale') BoxComponent = GreyScale

  return (
    <div className={styles.containerF}>
      <div className={styles.content}>
        <div className={styles.grid}>
          {[...Array(504).keys()].map((number) => <BoxComponent key={number} className={styles.box} />)}
        </div>
      </div>
    </div>
  );
};

export default ColorGrid;
