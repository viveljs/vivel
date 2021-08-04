import { atom } from 'jotai';
import { DialogueProps } from '../types';

const dialogueAtom = atom<DialogueProps>({} as DialogueProps);
const bgmAtom = atom<string>('default');
const dialogueIndex = atom<number>(0);
const lineIndex = atom<number>(0);
const sceneAtom = atom<string>('opening');
const backgroundAtom = atom<string>('');

export {
  dialogueAtom,
  dialogueIndex,
  lineIndex,
  sceneAtom,
  bgmAtom,
  backgroundAtom,
};
