import { atom } from 'jotai';

const modalVisible = atom<boolean>(false);
const volumeAtom = atom<number>(1);

export { modalVisible, volumeAtom };
