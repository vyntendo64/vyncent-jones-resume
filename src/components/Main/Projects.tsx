import * as React from 'react';
import { Text, Link, Flex, Stack, Box } from '@chakra-ui/core';
import { Project } from 'resume';
import { IconLabel } from './IconLabel';
import { MainHeader } from './MainHeader';

export interface ProjectsProps {
  experience: Project[];
}

export const Projects = ({ experience }: ProjectsProps) => {
  return (
    <Box>
      <MainHeader icon="project" text="Projects" />
      <Stack>
        {experience.map(article => {
          return (
            <Stack key={article.id}>
              <Flex justifyContent="space-between" width="100%">
                {!article.url && (
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
                )}

                {article.url && (
                  <Link
                    href={article.url}
                    fontFamily="heading"
                    fontSize="sm"
                    color="accent"
                    lineHeight={1}
                    fontWeight={700}
                    target="_blank"
                    m={0}
                  >
                    <Text>{article.title}</Text>
                  </Link>
                )}

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
