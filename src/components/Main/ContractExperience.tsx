import * as React from 'react';
import { Text, Box, Stack, Flex } from '@chakra-ui/core';
import { Experience } from 'resume';
import { MainHeader } from './MainHeader';
import { WorkExperienceHeader } from './WorkExperienceHeader';

export interface ContractExperienceProps {
  experience: Experience[];
}

export const ContractExperience = ({ experience }: ContractExperienceProps) => {
  return (
    <Box>
      <MainHeader icon="contract" text="Contracted experience" />
      <Stack>
        {experience.map(article => {
          return (
            <Stack key={article.id}>
              <WorkExperienceHeader
                title={article.title}
                location={article.location}
                company={article.company}
                duration={article.duration}
                companyUrl={article.url}
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
