import * as React from 'react';
import { GiSoundOff, GiSoundOn } from 'react-icons/gi';
import styles from '@styles/topbar.module.css';
import useSound from 'use-sound';
import pop from '@sfx/pop.mp3';
import { useAtom } from 'jotai';
import { volumeAtom } from '../stores/index';

const TopBar: React.FC = () => {
  const [play] = useSound(pop);
  const [isMuted, mute] = useAtom(volumeAtom);

  return (
    <div className={styles.wrapper}>
      <div></div>
      {isMuted ? (
        <GiSoundOn
          className={styles.button}
          onClick={() => {
            play();
            mute(0);
          }}
        />
      ) : (
        <GiSoundOff
          className={styles.button}
          onClick={() => {
            play();
            mute(1);
          }}
        />
      )}
    </div>
  );
};

export { TopBar };
