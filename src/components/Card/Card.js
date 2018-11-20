import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CardContainer = styled.div `
  color: black;
  transition-duration: 0.5s;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: black;
  }
`;

const CardImageContainer = styled.div`
  max-width: 400;
`;

const CardTitle = styled.h3 `
  text-transform: uppercase;
  margin: 20px 0 10px;
`;

const CardDescription = styled.p`
`;

const CardContent = styled.div`
  padding: 0 25px 25px;
  overflow: auto;
`;

const Card = (props) => (
  <CardContainer>
    <Img fluid={props.image} />
    <CardContent>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.excerpt}</CardDescription>
    </CardContent>
  </CardContainer>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  // TODO refactor this to the shape of resolutions object
  image: PropTypes.object.isRequired,
};