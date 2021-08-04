import * as React from 'react';
import { useAtomValue } from 'jotai/utils';
import { backgroundAtom, backgroundsAtom, dialogueAtom } from '../stores/index';

const Scene: React.FC = ({ children }) => {
  const dialogue = useAtomValue(dialogueAtom);
  const backgroundDefault = useAtomValue(backgroundAtom);
  const backgroundList = useAtomValue(backgroundsAtom);

  const background =
    dialogue && Object.keys(dialogue).length > 0
      ? dialogue.background
      : backgroundDefault;

  if (background) {
    const backgroundURL =
      backgroundList[
        Object.keys(backgroundList).find((x) =>
          x.includes(background)
        ) as string
      ].default;

    return (
      <main style={{ backgroundImage: `url(${backgroundURL})` }}>
        {children}
      </main>
    );
  }
  return <div>a</div>;
};

export { Scene };
