import { atom } from 'jotai';

const backgroundsAtom = atom<{ [key: string]: any }>(
  import.meta.globEager('../api/backgrounds/*.{jpg,jpeg,png}')
);

const charactersAtom = atom<{ [key: string]: any }>(
  import.meta.globEager('../api/characters/**/*.{jpg,jpeg,png}')
);

const soundsAtom = atom<{ [key: string]: any }>(
  import.meta.globEager('../api/sounds/*.{mp4,webm,mp3,ogg}')
);

const scenesAtom = atom<{ [key: string]: any }>(
  import.meta.globEager('../scenes/*.tsx')
);

export { backgroundsAtom, charactersAtom, soundsAtom, scenesAtom };
