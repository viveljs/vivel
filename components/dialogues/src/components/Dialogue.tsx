import { useAtom } from 'jotai';
import * as React from 'react';
import { WindupChildren, Pace } from 'windups';
import { lineIndexAtom, lineAtom } from '../store';
import { Buttons } from './Buttons';

const Dialogue = () => {
  const [lineIndex] = useAtom(lineIndexAtom);
  const [lines] = useAtom(lineAtom);

  const lineWrapper: React.CSSProperties = {
    minHeight: '5em',
    padding: 0,
  };

  if (lines)
    return (
      <WindupChildren>
        <p style={lineWrapper}>
          <Pace ms={9}>{lines[lineIndex]}</Pace>
        </p>
        <Buttons />
      </WindupChildren>
    );
  return <div>aa</div>;
};

export { Dialogue };
