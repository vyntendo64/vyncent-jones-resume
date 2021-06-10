import * as React from 'react';
import { Highlight } from 'resume';
import { Text, Flex, Link, Stack, Box } from '@chakra-ui/core';
import { MainHeader } from './MainHeader';

export interface ProjectsProps {
  highlights: Highlight[];
}

export const FunStuff = ({ highlights }: ProjectsProps) => {
  return (
    <Box>
      <MainHeader icon="fun" text="Fun stuff" />
      <Stack>
        {highlights.map(highlight => {
          return (
            <Flex
              key={highlight.text}
              alignItems="center"
              justifyContent="flex-start"
              borderLeft="3px solid"
              borderColor="accent"
              mb={2}
            >
              {!highlight.url && (
                <Text fontFamily="body" fontSize="xs" m={0} pl={1} color="body">
                  {highlight.text}
                </Text>
              )}
              {highlight.url && (
                <Link
                  target="_blank"
                  href={highlight.url}
                  fontFamily="body"
                  fontSize="xs"
                  m={0}
                  pl={1}
                  color="accent"
                >
                  {highlight.text}
                </Link>
              )}
            </Flex>
          );
        })}
      </Stack>
    </Box>
  );
};
