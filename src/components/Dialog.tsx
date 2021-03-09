import { FC } from 'react';
import { Box, Center } from '@chakra-ui/react';

const Dialog: FC = ({ children }) => {
  return (
    <Center w="full" zIndex={2} position="fixed" bottom={2}>
      <Box bg="steelblue" w="full" mx="6" px="7" py="4">
        Dialog{children}
      </Box>
    </Center>
  );
};

export default Dialog;
