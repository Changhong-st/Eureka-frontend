import React from 'react';

import styled from 'styled-components';

import png from './welcome.png';

const Img = styled.img`
  width: 25em;
  height: auto;
  margin-left: 2em;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`

function WelcomeImg() {
  return (
    <Img
      src={png}
      alt="Welcome"
    />
  )
}

export default WelcomeImg;

