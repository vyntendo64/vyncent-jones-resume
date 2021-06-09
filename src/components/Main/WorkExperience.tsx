import * as React from 'react';
import { Text, Flex, Stack, Box } from '@chakra-ui/core';
import { Experience } from 'resume';
import { MainHeader } from './MainHeader';
import { WorkExperienceHeader } from './WorkExperienceHeader';

export interface WorkExperienceProps {
  experience: Experience[];
}

export const WorkExperience = ({ experience }: WorkExperienceProps) => {
  return (
    <Box>
      <MainHeader icon="work" text="Work experience" />
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
              <Box>
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
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
