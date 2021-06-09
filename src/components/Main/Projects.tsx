import * as React from 'react';
import { Text, Flex, Stack, Box } from '@chakra-ui/core';
import { Experience } from 'resume';
import { MainHeader } from './MainHeader';
import { WorkExperienceHeader } from './WorkExperienceHeader';

export interface ProjectsProps {
  experience: Experience[];
}

export const Projects = ({ experience }: ProjectsProps) => {
  return (
    <Box>
      <MainHeader icon="work" text="Projects" />
      <Stack>
        {experience.map(article => {
          return (
            <Stack key={article.id}>
              <WorkExperienceHeader
                title={article.title}
                location={article.location}
                company={article.company}
                duration={article.duration}
              />
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
