import * as React from 'react';
import { ThemeProvider, Flex, BoxProps } from '@chakra-ui/core';
import { theme } from '../theme';
import { Blurb } from './Blurb';
import background from '../images/wallpaper.png';

export const Layout = ({ children }: BoxProps) => (
  <ThemeProvider theme={theme}>
    <Flex
      width="100%"
      pt={['100%']}
      position="fixed"
      bottom={0}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="#222"
      backgroundPosition="center"
      backgroundImage="url(https://i.imgur.com/YmN0AlT.png)"
      backgroundSize="cover"
    />
    <Flex
      bg="#222"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex>{children}</Flex>
      <Blurb />
    </Flex>
  </ThemeProvider>
);
