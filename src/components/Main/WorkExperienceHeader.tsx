import * as React from 'react';
import { Flex, Link, Text } from '@chakra-ui/core';
import { IconLabel } from './IconLabel';

interface WorkExperienceHeaderProps {
  title: string;
  location: string;
  company: string;
  companyUrl?: string;
  duration: {
    start: string;
    end: string;
  };
}

export const WorkExperienceHeader = ({
  title,
  location,
  company,
  companyUrl,
  duration,
}: WorkExperienceHeaderProps) => (
  <Flex flexDirection="column" pb={2}>
    <Flex
      alignItems="flex-start"
      justifyContent={['space-between']}
      flexDirection={['column', 'row']}
      width="100%"
    >
      <Flex alignItems="center">
        <Flex
          alignItems={['flex-start', 'flex-start', 'center']}
          flexDirection={['column', 'column', 'row']}
          pb={[1, 0]}
        >
          <Text
            fontFamily="heading"
            fontSize="md"
            color="body"
            lineHeight={1}
            fontWeight="bold"
            m={0}
          >
            {title}
          </Text>
        </Flex>
      </Flex>
      <IconLabel label={`${duration.start} - ${duration.end}`} />
    </Flex>
    <Flex
      alignItems={['flex-start', 'flex-start', 'center']}
      flexDirection={['column', 'column', 'row']}
    >
      <Text m={0} fontFamily="body" fontSize="xs" color="body">
        {!companyUrl && `${company}, ${location}`}
        {companyUrl && (
          <>
            <Link target="_blank" color="accent" href={companyUrl}>
              {company}
            </Link>
            <span>{`, ${location}`}</span>
          </>
        )}
      </Text>
    </Flex>
  </Flex>
);
