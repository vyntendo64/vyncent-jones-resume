import * as React from 'react';
import { Box } from '@chakra-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { ResumeData } from 'resume';
import { WorkExperience } from './WorkExperience';
import { ContractExperience } from './ContractExperience';
import { Projects } from './Projects';
import { FunStuff } from './FunStuff';

export const Main = () => {
  const {
    dataJson: { workExperience, contractExperience, projects, funHighlights },
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
          duration {
            start
            end
          }
          accomplishments
        }
        funHighlights
      }
    }
  `);

  return (
    <Box borderLeft="1px dashed" borderColor="border" py={4} px={3}>
      <WorkExperience experience={workExperience} />
      <ContractExperience experience={contractExperience} />
      <Projects experience={projects} />
      <FunStuff highlights={funHighlights} />
    </Box>
  );
};
