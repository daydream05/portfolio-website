import React from 'react';
import styled from 'styled-components';
import StackGrid from 'react-stack-grid';
import { Link } from 'gatsby'
import { Banner } from '../../components/Banner/Banner';
import PageContainer from '../../components/PageContainer/PageContainer';
import Card from '../../components/Card/Card';

import Layout from '../../components/Layout'

const Blog = ({ data }) => {
  return (
    <Layout>
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
              image={blogPost.node.coverPhoto.fluid}
              excerpt={blogPost.node.content.childMarkdownRemark.excerpt}
            />
          </Link>
        ))}
        </StackGrid>
      </PageContainer>
    </Layout>
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
            fluid {
              ...GatsbyContentfulFluid_withWebp
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