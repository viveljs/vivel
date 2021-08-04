import * as React from 'react';
import capitalize from 'capitalize';
import useSound from 'use-sound';
import { useAtomValue } from 'jotai/utils';
import {
  bgmAtom,
  sceneAtom,
  scenesAtom,
  soundsAtom,
  volumeAtom,
} from './stores';
import '@styles/main.css';

const Game = () => {
  const scene = useAtomValue(sceneAtom);
  const scenes = useAtomValue(scenesAtom);
  const sounds = useAtomValue(soundsAtom);
  const bgm = useAtomValue(bgmAtom);

  const music =
    sounds[Object.keys(sounds).find((x) => x.includes(bgm)) as string].default;

  const PlayMusic = () => {
    const volume = useAtomValue(volumeAtom);

    const [play, { stop }] = useSound(music, {
      interrupt: true,
      loop: true,
      volume: volume,
    });

    React.useEffect(() => {
      play();
      return () => {
        stop();
      };
    }, [play]);

    return <div></div>;
  };

  const Component =
    scenes[
      Object.keys(scenes).find((x) => x.includes(capitalize(scene))) as string
    ].default;

  return (
    <React.Suspense fallback={null}>
      <PlayMusic />
      <Component />
    </React.Suspense>
  );
};

export default Game;
