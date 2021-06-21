import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Background } from './Background';
import { dialogueAtom, Script } from '@vivel/dialogues';
import { useAtom } from 'jotai';

import '@styles/default.css';

const script = {
  characters: ['Charlie', 'Karen', 'Tom'],
  dialogues: [
    {
      characters: ['Karen'],
      background: 'campus',
      lines: [
        'Hello',
        "How are you today? This is just a demo, but for explanation i'll give it to Tom.",
      ],
    },
    {
      characters: ['Tom'],
      mood: 'happy',
      lines: [
        'Oh hi, [name]',
        "I don't know how to explain this, but here's the thing.. It's far from done, we're practically creating new Markup Language for this",
      ],
    },
    {
      characters: ['Charlie'],
      background: 'cafe',
      mood: 'annoyed',
      lines: ["So... i don't get to say hi ?"],
    },
    {
      characters: ['Tom', 'Karen'],
      mood: 'happy',
      lines: ['Nope ...'],
    },
  ],
};

const App = () => {
  const [dialogue] = useAtom(dialogueAtom);
  return (
    <Background background={dialogue.background}>
      <Script scripts={script.dialogues} />
    </Background>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
