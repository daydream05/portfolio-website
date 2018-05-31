import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Article from '../components/Article/Article';

const ArticleBanner = styled.div`
  max-width: 906px;
  margin-left: auto;
  margin-right: auto;
`;

const BlogPostTemplate = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ArticleBanner>
        <Img sizes={data.contentfulBlogPost.coverPhoto.sizes} />
      </ArticleBanner>
      <section>
        <Article
          html={data.contentfulBlogPost.content.childMarkdownRemark.html}
          title={data.contentfulBlogPost.title}
          date={data.contentfulBlogPost.createdAt}
        />
      </section>
    </div>
  );
};

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      coverPhoto {
        sizes {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default BlogPostTemplate;