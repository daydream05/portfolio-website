import React from 'react';
import styled from 'styled-components';
import video from '../../../public/purple-bag.mp4';
import { Banner } from '../../components/Banner/Banner';

const CardContainer = styled.div`
  color: rgba(0, 0, 0, .75);
  transition-duration: 0.5s;
  display: flex;
  flex-direction: column;

  :hover {
    color: #fff;
    background-color: black;
  }
`;
const CardImageBlock = styled.div`
  width: 100%;
  max-height: 300px;
  background-color: #D8D8D8;
  overflow: hidden;

  > * {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  text-transform: uppercase;
  margin: 20px 0 10px;
`;

const CardDescription = styled.p`
`;

const CardContent = styled.div`
  padding: 0 25px 25px;
  overflow: auto;
`;

const Card = () => (
  <div>
    <Banner title="Blog" />
    <CardContainer>
      <CardImageBlock>
        <video src={video} preload="auto" loop autoPlay />
      </CardImageBlock>
      <CardContent>
        <CardTitle>Insert Title Here</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
          tincidunt ut laoreet dolore magna 
          aliquam erat volutpat.
        </CardDescription>
      </CardContent>
    </CardContainer>
  </div>
);

export default Card;