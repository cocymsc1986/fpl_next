import React, { Component } from 'react';
import Link from 'next/link';

import withData from '../lib/withData';
import Main from '../lib/Main';
import HighestRatedContainer from '../components/HighestRatedContainer';
import MostPopularContainer from '../components/MostPopularContainer';

export default withData(props => (
  <Main>
    Welcome to fantasy prem
    <MostPopularContainer />
    <HighestRatedContainer />
  </Main>
));