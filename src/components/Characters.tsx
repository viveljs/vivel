import { charactersAtom, dialogueAtom } from '../stores/index';
import { useAtomValue } from 'jotai/utils';
import * as React from 'react';
import styles from '@styles/characters.module.css';

const Characters = () => {
  const characters = useAtomValue(dialogueAtom).characters;
  const mood = useAtomValue(dialogueAtom).mood ?? 'content';
  const characterImages = useAtomValue(charactersAtom);

  const images = characters.map((images, index) => {
    return characterImages[
      Object.keys(characterImages).find(
        (x) =>
          x.includes(images.toLowerCase()) &&
          x.includes(mood[index].toLowerCase())
      ) as string
    ].default;
  });

  if (images) {
    return (
      <section className={styles.wrapper}>
        {images.map((x, index) => {
          return <img className={styles.character} key={index} src={x} />;
        })}
      </section>
    );
  }
  return null;
};

export { Characters };
