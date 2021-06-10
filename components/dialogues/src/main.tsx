import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { intro } from '../../../example-react/content/intro';
import { Script } from './Script';

const scripts = [
  {
    characters: ['Karen'],
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
    mood: 'annoyed',
    lines: ["So... i don't get to say hi ?"],
  },
  {
    characters: ['Tom', 'Karen'],
    mood: 'happy',
    lines: ['Nope ...'],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Script scripts={scripts} />
  </React.StrictMode>,
  document.getElementById('root')
);
