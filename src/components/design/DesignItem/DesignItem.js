import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HorizontalCardImage = styled.div`
  flex: 3;
  height: 100%;
  background-color: #D8D8D8;
  background-image: ${props => `url(${props.image})`};
  background-position: center center;
  background-size: cover;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::after {
    background-color: rgba(0,0,0. 0.15);
  }
`;

const HorizontalCard = styled.div`
  display: flex;
  flex-direction: ${ props => props.reversed ? 'row-reverse' : 'row' };
  height: 50vh;
  width: 100%;
`;

const HorizontalCardContent = styled.div`
  flex: 2;
  background-color: #fff;
  display: flex;
  color: #000;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  z-index: 1;
`;

const Title = styled.h3`
  margin: 0 20px 10px;
`;

const Description = styled.p `
  text-align: center;
`;

const TagDivider = styled.span`
  margin: 0 15px;
`;

const Tags = styled.div`
`;

const Card = (props) => (
  <HorizontalCard reversed={props.reversed} {...props}>
    <HorizontalCardContent>
      <Content>
        <Title>{props.title}</Title>
        <Tags>
          <span>mobile</span><TagDivider>|</TagDivider><span>web</span>
        </Tags>
        <Description>{props.description}</Description>
      </Content>
    </HorizontalCardContent>
    <HorizontalCardImage />
  </HorizontalCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reversed: PropTypes.bool,
};

Card.defaultProps = {
  reversed: false,
}

const DesignItem = (props) => (
  <div>
    <Card title="Grabba" description="Mockup for a garage-sharing app" />
    <Card title = "Grabba" description = "Mockup for a garage-sharing app"  reversed />
  </div>
);

export default DesignItem;