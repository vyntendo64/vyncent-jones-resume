import * as React from 'react';
import { Flex } from '@chakra-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { ResumeData } from 'resume';
import { WorkExperience } from './WorkExperience';
import { ContractExperience } from './ContractExperience';
import { Projects } from './Projects';

export const Main = () => {
  const {
    dataJson: { workExperience, contractExperience, projects },
  } = useStaticQuery<ResumeData>(graphql`
    query {
      dataJson {
        workExperience {
          id
          title
          location
          company
          duration {
            start
            end
          }
          accomplishments
        }
        contractExperience {
          id
          title
          location
          company
          duration {
            start
            end
          }
          accomplishments
        }
        projects {
          id
          title
          location
          company
          duration {
            start
            end
          }
          accomplishments
        }
      }
    }
  `);

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection="column"
      borderLeft="1px dashed"
      borderColor="border"
      py={4}
      px={3}
    >
      <ContractExperience experience={contractExperience} />
      <WorkExperience experience={workExperience} />
      <Projects experience={projects} />
    </Flex>
  );
};
