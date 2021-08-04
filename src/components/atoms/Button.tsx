import * as React from 'react';
import useSound from 'use-sound';
import { useAtom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

import {
  dialogueAtom,
  dialogueIndex,
  lineIndex,
  sceneAtom,
} from '../../stores';
import { ButtonProps } from '../../types';
import pop from '@sfx/pop.mp3';
import styles from '@styles/buttons.module.css';

const Button: React.FC<ButtonProps> = ({
  text,
  lines = false,
  dialogue = false,
  scene,
  disabled = false,
}) => {
  const [clicked] = useSound(pop);
  const [getlineIndex, setLineIndex] = useAtom(lineIndex);
  const [getDialogueIndex, setDialogueIndex] = useAtom(dialogueIndex);
  const setScene = useUpdateAtom(sceneAtom);
  const response = useAtomValue(dialogueAtom).response;

  const changeDialogue = () => {
    setDialogueIndex(getDialogueIndex + 1);
    setLineIndex(0);
  };

  const nextScene = () => {
    setDialogueIndex(0);
    setLineIndex(0);
    setScene(scene as string);
  };

  return (
    <button
      onClick={() => {
        clicked();
        lines && setLineIndex(getlineIndex + 1);
        dialogue && changeDialogue();
        scene && nextScene();
      }}
      className={styles.Button}
      disabled={disabled}
    >
      {response ?? text ?? '...'}
    </button>
  );
};

export { Button };
