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

  const dialogueWrapper: React.CSSProperties = {
    /* Border */
    borderWidth: '1px',
    borderColor: '#333',
    borderRadius: '0.3em',
    borderStyle: 'solid',
    /* Size */
    minHeight: '5em',
    /* Spacing */
    padding: '0.3em 1.2em',
    /* Colors */
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#eee',
    /* Flex */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  React.useEffect(() => {
    if (script) {
      setScript(scripts[index]);
    }
  }, [index]);
  if (script)
    return (
      <div style={dialogueWrapper}>
        <CharacterNames />
        <Dialogue />
      </div>
    );
  return null;
};

export { Script };
export type { scriptArrayProps, scriptProps };
