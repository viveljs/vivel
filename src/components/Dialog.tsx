import { FC } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import Options from './Options';

const Dialog: FC = ({ children }) => {
  return (
    <Center w="full" zIndex={2} position="fixed" bottom={5}>
      <Box bg="steelblue" w="full" mx="6" px="7" py="4">
        <Text color="white" fontWeight="bold">
          Dialog
        </Text>
        <Text color="white">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          {children}
        </Text>
        <Options />
      </Box>
    </Center>
  );
};

export default Dialog;
