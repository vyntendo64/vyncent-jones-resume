import * as React from 'react';
import { Text, Flex, Stack, Box } from '@chakra-ui/core';
import { MainHeader } from './MainHeader';

export interface ProjectsProps {
  highlights: string[];
}

export const FunStuff = ({ highlights }: ProjectsProps) => {
  return (
    <Box>
      <MainHeader icon="work" text="Fun stuff" />
      <Stack>
        {highlights.map(highlight => {
          return (
            <Flex
              key={highlight}
              alignItems="center"
              justifyContent="flex-start"
              borderLeft="3px solid"
              borderColor="accent"
              mb={2}
            >
              <Text fontFamily="body" fontSize="xs" m={0} pl={1} color="body">
                {highlight}
              </Text>
            </Flex>
          );
        })}
      </Stack>
    </Box>
  );
};
