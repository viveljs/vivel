import { FC, useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { BellIcon, NotAllowedIcon } from '@chakra-ui/icons';
import ReactHowler from 'react-howler';
import elevator from '@snd/elevator.mp3';

const SoundButton: FC = () => {
  const [sound, setSound] = useState(true);

  return (
    <>
      <ReactHowler src={elevator} playing={sound} loop />
      {sound == true ? (
        <IconButton
          size="xs"
          isRound
          aria-label="Disable sound"
          icon={<NotAllowedIcon />}
          onClick={() => setSound(!sound)}
        />
      ) : (
        <IconButton
          size="xs"
          isRound
          aria-label="Enable sound"
          icon={<BellIcon />}
          onClick={() => setSound(!sound)}
        />
      )}
    </>
  );
};

export default SoundButton;
