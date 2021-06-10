import { useAtom } from 'jotai';
import * as React from 'react';
import { WindupChildren, Pace } from 'windups';
import { lineIndexAtom, lineAtom } from '../store';
import { Buttons } from './Buttons';
import styles from '../assets/box.module.css';

const Dialogue = () => {
  const [lineIndex] = useAtom(lineIndexAtom);
  const [lines] = useAtom(lineAtom);

  if (lines)
    return (
      <WindupChildren>
        <p className={styles.lineWrapper}>
          <Pace ms={9}>{lines[lineIndex]}</Pace>
        </p>
        <Buttons />
      </WindupChildren>
    );
  return <div>aa</div>;
};

export { Dialogue };
