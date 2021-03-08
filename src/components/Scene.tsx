import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import background from '@img/backgrounds/TrainTunnel.png';

const Scene: FC = ({ children }) => {
  return (
    <Flex bgImage={`url(${background})`} w="100%" h="100vh">
      {children}
    </Flex>
  );
};

export default Scene;
