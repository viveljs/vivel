import * as React from 'react';
import { useIsFinished } from 'windups';
import { NextDialogueButton, NextLineButton } from './buttons';

const Buttons = () => {
  const isFinished = useIsFinished();
  if (isFinished)
    return (
      <>
        <NextLineButton />
        <NextDialogueButton />
      </>
    );
  return null;
};

export { Buttons };
