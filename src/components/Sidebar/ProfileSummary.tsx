import * as React from 'react';
import { Box, Text, Heading, Stack } from '@chakra-ui/core';

export interface ProfileSummaryProps {
  aboutMe: string[];
}

export const ProfileSummary = ({ aboutMe }: ProfileSummaryProps) => (
  <Box>
    <Heading fontSize="md" color="body" mt={2} mb={2}>
      About me
    </Heading>
    <Stack spacing="10px">
      {aboutMe.map(detail => (
        <Text
          key={detail}
          width="100%"
          fontSize="xs"
          fontFamily="body"
          m={0}
          textAlign={['left', 'left', 'left']}
          color="body"
        >
          {detail}
        </Text>
      ))}
    </Stack>
  </Box>
);
