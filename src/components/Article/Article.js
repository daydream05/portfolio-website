import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ArticleContainer = styled.div`
  max-width: 906px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledArticle = styled.article`
  font-size: 16px;
  font-family: Europa;
  color: rgba(0, 0, 0, 0.75);
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 400px;
  margin: 0;
  font-family: Europa;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
`;

const Title = styled.h1`
  font-family: Europa;
  font-size: 64px;
  color: #4A4A4A;
  margin: 32px 0 16px;
`;


/**
 * TODO: 
 * Set innerHTML instead of passing a text props.
 */
const Article = ({ article }) => (
  <ArticleContainer>
    <StyledArticle>
      <Header>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
      </Header>
      <p>{article.content}</p>
    </StyledArticle>
  </ArticleContainer>
);

export default Article;
