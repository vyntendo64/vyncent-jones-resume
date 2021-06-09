import React from 'react';
import { Flex } from '@chakra-ui/core';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';
import { Paper } from '../components/Paper';
import { Main } from '../components/Main/Main';
import { Profile } from '../components/Sidebar/Profile';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Paper>
      <Flex alignItems="flex-start" flexDirection={['column', 'row', 'row']}>
        <Profile />
        <Main />
      </Flex>
    </Paper>
  </Layout>
);

export default IndexPage;
