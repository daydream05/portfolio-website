import React from 'react';
import styled from 'styled-components';
import video from '../../../public/purple-bag.mp4';
import { Banner } from '../../components/Banner/Banner';

const CardContainer = styled.div`
  color: rgba(0, 0, 0, .75);
  transition-duration: 0.5s;

  :hover {
    color: #fff;
    background-color: black;
  }
`;
const CardImageBlock = styled.div`
  width: 100%;
  height: 150px;
  background-color: #D8D8D8;
`;

const CardTitle = styled.h3`
  font-family: Europa;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin: 20px 0 10px;
`;

const CardDescription = styled.p`
  font-family: Europa-Regular;
  font-size: 16px;
`;

const CardContent = styled.div`
  padding: 0 25px 25px;
  overflow: auto;
`;

const Card = () => (
  <div>
    <Banner title="Blog" />
    <CardContainer>
      <CardImageBlock />
      <CardContent>
        <CardTitle>Insert Title Here</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
          tincidunt ut laoreet dolore magna 
          aliquam erat volutpat.
        </CardDescription>
      </CardContent>
      <video src={video} preload="auto" loop autoPlay />
    </CardContainer>
  </div>
);

export default Card;