import * as React from 'react';
import { useAtom } from 'jotai';
import { dialogueIndexAtom, lineAtom, lineIndexAtom } from '../../store';

const NextDialogueButton = () => {
  const [index, setIndex] = useAtom(dialogueIndexAtom);
  const [lineIndex, setLineIndex] = useAtom(lineIndexAtom);
  const [lines] = useAtom(lineAtom);
  if (lineIndex >= lines.length - 1)
    return (
      <button
        onClick={() => {
          setIndex(index + 1);
          setLineIndex(0);
        }}
      >
        NextDialog
      </button>
    );
  return null;
};

export { NextDialogueButton };
