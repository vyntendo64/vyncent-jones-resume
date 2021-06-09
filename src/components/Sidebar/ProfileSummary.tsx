import * as React from 'react';
import { Flex, Text, Heading, Stack } from '@chakra-ui/core';

export interface ProfileSummaryProps {
  aboutMe: string[];
}

export const ProfileSummary = ({ aboutMe }: ProfileSummaryProps) => (
  <Flex
    flexDirection="column"
    alignItems={['flex-start', 'flex-start', 'flex-start']}
    width="100%"
  >
    <Heading fontSize="md" color="body" m={0} mb={1}>
      About me
    </Heading>
    {aboutMe.map(detail => (
      <Stack key={detail}>
        <Text
          width="100%"
          fontSize="xs"
          fontFamily="body"
          m={0}
          textAlign={['left', 'left', 'left']}
          color="body"
        >
          {detail}
        </Text>
      </Stack>
    ))}
  </Flex>
);
