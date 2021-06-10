import * as React from 'react';
import { useAtom } from 'jotai';
import { lineAtom, lineIndexAtom } from '../../store';

const NextLineButton = () => {
  const [index, setIndex] = useAtom(lineIndexAtom);
  const [lines] = useAtom(lineAtom);
  if (index < lines.length - 1)
    return (
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        NextLine
      </button>
    );
  return null;
};

export { NextLineButton };
