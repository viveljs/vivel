import * as React from 'react';
import { useAtom } from 'jotai';
import { dialogueIndexAtom, dialogueAtom } from './store';
import { Dialogue } from './components';
import '@styles/default.css';

interface scriptProps {
  characters: string[];
  background?: string;
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
      setScript({
        characters: scripts[index].characters,
        background: scripts[index].background ?? script.background,
        mood: scripts[index].mood,
        lines: scripts[index].lines,
      });
    }
  }, [index]);
  if (script)
    return (
      <div className="scriptWrapper">
        <Dialogue />
      </div>
    );
  return null;
};

export { Script };
export type { scriptArrayProps, scriptProps };
