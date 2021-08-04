import { atom } from 'jotai';

const name = atom<string>('');
const character = atom<string[]>([]);

export { name, character };
