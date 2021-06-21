import { atom } from 'jotai';
import { scriptProps } from './Script';

const dialogueIndexAtom = atom<number>(0);
const lineIndexAtom = atom<number>(0);

const dialogueAtom = atom<scriptProps>({} as scriptProps);

const lineAtom = atom<string[]>((get) => {
  const dialogue = get(dialogueAtom) as scriptProps;
  return dialogue.lines;
});

const characterAtom = atom<string[]>((get) => {
  const dialogue = get(dialogueAtom) as scriptProps;
  return dialogue.characters;
});

export {
  dialogueIndexAtom,
  lineIndexAtom,
  dialogueAtom,
  lineAtom,
  characterAtom,
};
