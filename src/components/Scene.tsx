import { FC } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import background from '@img/backgrounds/TrainTunnel.png';
import Dialog from './Dialog';
import Character from './Character';

const Scene: FC = ({ children }) => {
  return (
    <Box bgImage={`url(${background})`} w="100%" h="100vh" overflow="hidden">
      <Flex pt="70" px="30" justify="space-between">
        <Character></Character>
        <Box>Another Module{children}</Box>
      </Flex>
      <Dialog></Dialog>
    </Box>
  );
};

export default Scene;
