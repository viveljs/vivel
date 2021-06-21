import { useAtom } from 'jotai';
import * as React from 'react';
import { characterAtom } from '../store';

const CharacterNames = () => {
  const [characters] = useAtom(characterAtom);

  if (characters)
    return (
      <div className="characterName">
        {/* a bit of hackish solution */}
        {characters.map((x, index) => {
          if (characters.length == 1) return x;
          else if (characters.length == 2) return index == 1 ? x : `${x} & `;
          else return index == characters.length - 1 ? x : `${x}, `;
        })}
      </div>
    );
  return null;
};

export { CharacterNames };
