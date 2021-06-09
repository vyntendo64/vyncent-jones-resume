/* eslint-disable  react/jsx-one-expression-per-line */
import React from 'react';
import { Text, Flex, Link } from '@chakra-ui/core';

export const Blurb = () => {
  return (
    <Flex
      width="100%"
      maxWidth={['90%', '90%', 794]}
      justifyContent="center"
      py={1}
      px={2}
      m={2}
      bg="accent"
      borderRadius={10}
      zIndex={10}
    >
      <Text color="white" fontFamily="body" textAlign="center" fontSize="xs">
        Made by Vyncent Jones, built with{' '}
        <Link
          textDecoration="italic"
          href="https://reactjs.org"
          target="_blank"
        >
          ReactJs
        </Link>
        ,{' '}
        <Link href="https://www.gatsbyjs.org" target="_blank">
          GatsbyJs
        </Link>{' '}
        and{' '}
        <Link href="https://chakra-ui.com/" target="_blank">
          Chakra-ui
        </Link>
        .{' '}
        <Link
          href="https://github.com/vyntendo64/vyncent-jones-resume"
          target="_blank"
        >
          Check out the code
        </Link>
      </Text>
    </Flex>
  );
};
