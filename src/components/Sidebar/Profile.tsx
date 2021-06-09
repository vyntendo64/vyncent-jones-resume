import * as React from 'react';
import { ResumeData } from 'resume';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Stack } from '@chakra-ui/core';
import { ProfileImage } from './ProfileImage';
import { ProfileName } from './ProfileName';
import { ProfileTitle } from './ProfileTitle';
import { ProfileContact } from './ProfileContact';
import { ProfileSummary } from './ProfileSummary';
import { ProfileSkills } from './ProfileSkills';
import { Education } from './Education';

export const Profile = () => {
  const {
    dataJson: {
      profile: { name, title, contact, aboutMe, skills },
    },
  } = useStaticQuery<ResumeData>(graphql`
    query {
      dataJson {
        profile {
          name {
            lastName
            nickName
          }
          title
          contact {
            email
            github
            linkedIn
            city
          }
          aboutMe
          skills {
            languages
            database
            technologies
            hobbies
          }
        }
      }
    }
  `);

  return (
    <Box width={['100%', 250, 500]} p={4}>
      <Stack direction="column" spacing={4}>
        <ProfileImage />
        <ProfileName firstName={name.nickName} lastName={name.lastName} />
        <ProfileTitle title={title} />
        <ProfileContact contact={contact} />
        <ProfileSummary aboutMe={aboutMe} />
        <ProfileSkills skills={skills} />
        <Education />
      </Stack>
    </Box>
  );
};
