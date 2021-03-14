import { FC } from 'react';
import { Box, Center, Text, IconButton, Flex } from '@chakra-ui/react';
import { WindupChildren, useSkip, useRewind, useIsFinished, Pace } from 'windups';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import Options from './Options';
import SoundButton from './SoundButton';

const ActionButton = () => {
  const rewind = useRewind();
  const skip = useSkip();
  const isFinished = useIsFinished();

  return isFinished ? (
    <IconButton
      size="xs"
      isRound
      icon={<ArrowLeftIcon w="3" />}
      aria-label="Rewind"
      onClick={rewind}
    />
  ) : (
    <IconButton
      size="xs"
      aria-label="Skip"
      isRound
      icon={<ArrowRightIcon w="3" />}
      onClick={skip}
    />
  );
};

const Dialog: FC = () => {
  return (
    <Center w="full" zIndex={2} position="fixed" bottom={5}>
      <Box bg="rgba(0,0,0,0.9)" w="full" mx="6" rounded="lg">
        <WindupChildren>
          <Flex justify="space-between" align="center" w="100%" px="3" pt="2">
            <Pace ms={1}>
              <Text className="characterName" color="white" fontSize="xl" fontWeight="bold">
                Character Name
              </Text>
            </Pace>
            <Flex>
              <ActionButton />
              <SoundButton />
            </Flex>
          </Flex>
          <Text className="dialog" color="white" px="3" py="4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </Text>
        </WindupChildren>
        <Options />
      </Box>
    </Center>
  );
};

export default Dialog;
