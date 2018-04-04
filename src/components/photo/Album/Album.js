import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const CardDescription = styled.p`
  padding: 20px;
`;
const Album = (props) => (
  <Card>
    <CardImage src={props.image}/>
    <CardDescription>
      {props.description}
    </CardDescription>
  </Card>
);

Album.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
}

Album.defaultProps = {
  image: 'http://via.placeholder.com/300x300',
  description: 'Hello world',
}

export default Album;