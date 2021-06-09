import * as React from 'react';
import { Text, Flex } from '@chakra-ui/core';
import { Experience } from 'resume';
import { MainHeader } from './MainHeader';
import { WorkExperienceHeader } from './WorkExperienceHeader';

export interface ContractExperienceProps {
  experience: Experience[];
}

export const ContractExperience = ({ experience }: ContractExperienceProps) => {
  return (
    <Flex width="100%" height="100%" flexDirection="column" px={3} pt={3}>
      <MainHeader icon="work" text="Contracted experience" />
      {experience.map((article, index) => {
        return (
          <Flex
            key={article.id}
            flexDirection="column"
            pb={experience.length - 1 === index ? 0 : 3}
          >
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
          </Flex>
        );
      })}
    </Flex>
  );
};
