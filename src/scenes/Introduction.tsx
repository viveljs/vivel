import * as React from 'react';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import { Characters, Dialogue, Scene, TopBar } from '../components';
import { Introduction as Intro } from '../api/introduction';
import {
  backgroundAtom,
  bgmAtom,
  dialogueAtom,
  dialogueIndex,
} from '../stores/index';

const Introduction: React.FC = () => {
  const setDialogue = useUpdateAtom(dialogueAtom);
  const setBGM = useUpdateAtom(bgmAtom);
  const setBackground = useUpdateAtom(backgroundAtom);
  const index = useAtomValue(dialogueIndex);

  React.useEffect(() => {
    setBackground(Intro.background);
    setBGM(Intro.bgm);
  }, []);

  React.useEffect(() => {
    setDialogue(Intro.dialogues[index]);
  }, [index]);

  return (
    <Scene>
      <TopBar />
      <Characters />
      <Dialogue />
    </Scene>
  );
};

export default Introduction;
