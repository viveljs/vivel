import * as React from 'react';
import { useAtom } from 'jotai';
import { dialogueIndexAtom, dialogueAtom } from './store';
import { Dialogue } from './components/Dialogue';

import styles from './assets/box.module.css';
import { CharacterNames } from './components/CharacterNames';

interface scriptProps {
  characters: string[];
  mood?: string;
  lines: string[];
}

interface scriptArrayProps {
  scripts: scriptProps[];
}

const Script: React.FC<scriptArrayProps> = ({ scripts }) => {
  const [index] = useAtom(dialogueIndexAtom);
  const [script, setScript] = useAtom(dialogueAtom);

  React.useEffect(() => {
    if (script) {
      setScript(scripts[index]);
    }
  }, [index]);
  if (script)
    return (
      <div className={styles.dialogueWrapper}>
        <CharacterNames />
        <Dialogue />
      </div>
    );
  return null;
};

export { Script };
export type { scriptArrayProps, scriptProps };
