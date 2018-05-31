import React from 'react';
import styled from 'styled-components';
import StackGrid from 'react-stack-grid';
import Link from 'gatsby-link';
import { Banner } from '../../components/Banner/Banner';
import PageContainer from '../../components/PageContainer/PageContainer';
import Card from '../../components/Card/Card';


const Blog = ({ data }) => {
  console.log(data);
  return (
    <PageContainer>
      <Banner title="Blog" />
      <StackGrid
        columnWidth={300}
        columngutter={100}
      >
      {data.allContentfulBlogPost.edges.map((blogPost, index) => (
        <Link
          to={blogPost.node.fields.url}
          key={index}
        >
          <Card
            title={blogPost.node.title}
            image={blogPost.node.coverPhoto.sizes}
            excerpt={blogPost.node.content.childMarkdownRemark.excerpt}
          />
        </Link>
      ))}
      </StackGrid>
    </PageContainer>
  )
};

export default Blog;

export const blogPageQuery = graphql`
  query BlogPageQuery {
    allContentfulBlogPost(sort: {fields: [createdAt], order: DESC}) {
      edges {
        node {
          title
          coverPhoto {
            sizes {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          fields {
            url
          }
        }
      }
    }
  }
`;