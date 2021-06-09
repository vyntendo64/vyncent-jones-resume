import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Heading, Text, Stack } from '@chakra-ui/core';
import { ResumeData } from 'resume';

export const Education = () => {
  const {
    dataJson: { educations },
  } = useStaticQuery<ResumeData>(graphql`
    query {
      dataJson {
        educations {
          school
          duration
          location
          degree
        }
      }
    }
  `);

  return (
    <Box>
      <Heading fontSize="md" color="heading">
        Education
      </Heading>

      {educations.map(education => {
        return (
          <Stack key={education.school}>
            <Box>
              <Heading
                fontSize="xs"
                color="heading"
                textTransform="capitalize"
                lineHeight={1}
              >
                School
              </Heading>
              <Text color="body" fontSize="sm" lineHeight={1}>
                {education.school}
              </Text>
            </Box>
            <Box>
              <Heading
                fontSize="xs"
                color="heading"
                textTransform="capitalize"
                lineHeight={1}
              >
                Duartion
              </Heading>
              <Text color="body" fontSize="sm" lineHeight={1}>
                {education.duration}
              </Text>
            </Box>
            <Box>
              <Heading
                fontSize="xs"
                color="heading"
                textTransform="capitalize"
                lineHeight={1}
              >
                Location
              </Heading>
              <Text color="body" fontSize="sm" lineHeight={1}>
                {education.location}
              </Text>
            </Box>
            <Box>
              <Heading
                fontSize="xs"
                color="heading"
                textTransform="capitalize"
                lineHeight={1}
              >
                Degree
              </Heading>
              <Text color="body" fontSize="sm" lineHeight={1}>
                {education.degree}
              </Text>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
};
