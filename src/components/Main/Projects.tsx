import * as React from 'react';
import { Text, Flex, Stack, Box } from '@chakra-ui/core';
import { Project } from 'resume';
import { IconLabel } from './IconLabel';
import { MainHeader } from './MainHeader';

export interface ProjectsProps {
  experience: Project[];
}

export const Projects = ({ experience }: ProjectsProps) => {
  return (
    <Box>
      <MainHeader icon="work" text="Projects" />
      <Stack>
        {experience.map(article => {
          return (
            <Stack key={article.id}>
              <Flex justifyContent="space-between" width="100%">
                <Text
                  fontFamily="heading"
                  fontSize="md"
                  color="body"
                  lineHeight={1}
                  fontWeight="bold"
                  m={0}
                >
                  {article.title}
                </Text>

                <IconLabel
                  label={`${article.duration.start} - ${article.duration.end}`}
                />
              </Flex>

              <Flex flexDirection="column">
                {article.accomplishments.map(accomplishment => {
                  return (
                    <Flex
                      key={accomplishment}
                      alignItems="center"
                      justifyContent="flex-start"
                      borderLeft="3px solid"
                      borderColor="accent"
                      mb={2}
                    >
                      <Text
                        fontFamily="body"
                        fontSize="xs"
                        m={0}
                        pl={1}
                        color="body"
                      >
                        {accomplishment}
                      </Text>
                    </Flex>
                  );
                })}
              </Flex>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
