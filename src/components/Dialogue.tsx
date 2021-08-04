import * as React from 'react';
import { WindupChildren, useSkip, useIsFinished } from 'windups';
import { Button } from './atoms';
import { useAtomValue } from 'jotai/utils';
import { dialogueAtom, lineIndex } from '../stores/index';
import styles from '@styles/dialogue.module.css';
import 'semantic-ui-css/semantic.min.css';
import { replace } from '../lib/lineReplace';

const LinesContainer: React.FC = ({ children }) => {
  const skip = useSkip();
  const finished = useIsFinished();
  const cursorStyle = finished ? {} : { cursor: 'pointer' };

  return (
    <div className={styles.dialogue} style={cursorStyle} onClick={skip}>
      {children}
    </div>
  );
};

const Lines: React.FC<{ text: string }> = ({ text }) => {
  return (
    <WindupChildren>
      <LinesContainer>{replace(text)}</LinesContainer>
    </WindupChildren>
  );
};

const Dialogue: React.FC = () => {
  const dialogue = useAtomValue(dialogueAtom);
  const index = useAtomValue(lineIndex);

  if (Object.keys(dialogue).length > 0)
    return (
      <section className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.name}>
            {dialogue.alias ?? dialogue.characters}
          </div>
          <div className={styles.response}>
            {!dialogue.option ? (
              index == dialogue.lines.length - 1 ? (
                <Button dialogue />
              ) : (
                <Button lines />
              )
            ) : (
              dialogue.option
            )}
          </div>
        </div>
        <Lines text={dialogue.lines[index]} />
      </section>
    );
  return null;
};

export { Dialogue };
