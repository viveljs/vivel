import * as React from 'react';
import { useAtom } from 'jotai';
import { WindupChildren, Pace } from 'windups';
import { lineIndexAtom, lineAtom } from '../store';
import { Buttons } from './Buttons';
import { CharacterNames } from './CharacterNames';

import '@styles/default.css';

const Dialogue = () => {
  const [lineIndex] = useAtom(lineIndexAtom);
  const [lines] = useAtom(lineAtom);

  if (lines)
    return (
      <WindupChildren>
        <div className="detailWrapper">
          <CharacterNames />
          <Buttons />
        </div>
        <p className="dialogueWrapper">
          <Pace ms={9}>{lines[lineIndex]}</Pace>
        </p>
      </WindupChildren>
    );
  return <div>aa</div>;
};

export { Dialogue };
