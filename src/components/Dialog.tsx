import { FC } from 'react';
import { Box, Center, Text, IconButton, Flex } from '@chakra-ui/react';
import { WindupChildren, useSkip, useRewind, useIsFinished, Pace } from 'windups';
import { ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import Options from './Options';

const ActionButton = () => {
  const rewind = useRewind();
  const skip = useSkip();
  const isFinished = useIsFinished();

  return isFinished ? (
    <IconButton isRound icon={<ArrowRightIcon />} aria-label="Rewind" onClick={rewind} />
  ) : (
    <IconButton aria-label="Skip" isRound icon={<CloseIcon />} onClick={skip} />
  );
};

const Dialog: FC = ({ children }) => {
  return (
    <Center w="full" zIndex={2} position="fixed" bottom={5}>
      <Box bg="steelblue" w="full" mx="6" px="7" py="4">
        <WindupChildren>
          <Flex justify="space-between" align="center" w="100%">
            <Pace ms={1}>
              <Text color="white" fontSize="lg" fontWeight="bold">
                Character Name
              </Text>
            </Pace>
            <Box>
              <ActionButton />
            </Box>
          </Flex>
          <Text color="white">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
            {children}
          </Text>
        </WindupChildren>
        <Options />
      </Box>
    </Center>
  );
};

export default Dialog;
