import { Flex, Text } from '@chakra-ui/core';

import * as React from 'react';

export interface ProfileNameProps {
  firstName: string;
  lastName: string;
}

export const ProfileName = ({ firstName, lastName }: ProfileNameProps) => (
  <Flex width="100%" flexDirection="column" alignItems="center" py={4}>
    <Text
      fontFamily="heading"
      fontSize="3xl"
      color="heading"
      fontWeight="bold"
      textTransform="uppercase"
      lineHeight={1}
    >
      {firstName}
    </Text>
    <Text
      lineHeight={1}
      color="heading"
      fontFamily="heading"
      fontSize="lg"
      textTransform="uppercase"
    >
      {lastName}
    </Text>
  </Flex>
);
