import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ArticleContainer = styled.div`
  max-width: 906px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  background-color: white;
`;

const StyledArticle = styled.article`
  color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

const Description = styled.p`
  text-align: center;
  max-width: 400px;
  margin: 0;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
`;

const Title = styled.h1`
  font-size: 64px;
  color: #4A4A4A;
  margin: 32px 0 16px;
`;

const Date = styled.span`
`;


/**
 * TODO: 
 * Set innerHTML instead of passing a text props.
 */
const Article = ({ 
    html,
    title,
    date,
    shortDescription
  }) => (
  <ArticleContainer>
    <StyledArticle>
      <Header>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{shortDescription}</Description>
      </Header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </StyledArticle>
  </ArticleContainer>
);

Article.propTypes = {
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
  date: PropTypes.string,
}

Article.defaultProps = {
  shortDescription: null,
  date: null,
}

export default Article;

