import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import ProjectCard from '../components/ProjectCard'

import {
  Background,
  Container,
  Link,
  SubTitle,
  Section,
  SectionTitle
} from '../components/StyledComponents'

import { media } from '../utils/media'

import portrait from '../images/portrait.png'

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  transform: translateZ(0);

  ${media.desktop`
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: auto;
  `}
`

const HeroImg = styled.img`
  position: absolute;
  width: 100%;
  transform: scale(2);
  opacity: 0.5;
  left: 10rem;

  ${media.desktop`
    opacity: 1;
    width: 100%;
    transform: none;
    position: absolute;
    left: -4rem;
    height: auto;
  `}
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 36px 0;
  z-index: 1;

  ${media.desktop`
    width: 50%;
    margin-left: auto;
  `}
`

const Intro = styled.h1`
  font-size: 14px;
  font-weight: normal;
  margin-top: 0;
  color: ${props => props.theme.colors.white};

  ${media.desktop`
    font-size: 16px;
    margin-bottom: 2rem;
  `}
`

const ButtonGroup = styled.div`
  margin-top: 4rem;
  align-self: center;
  cursor: pointer;

  ${media.desktop`
    align-self: flex-start;
    margin-top: 4rem;
  `}
`

const Button = styled.button`
  background-color: none;
  background: none;
  color: ${props => props.theme.colors.white};
  border: 1px solid #FFFFFF;
  border-radius: 30px;
  -webkit-appearance: button;
  height: 45px;
  width: 290px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`

const ServicesSection = () => {
  const SkillsList = styled.ul`
    ${media.desktop`
        display: flex;
        flex-wrap: wrap;
    `}
  `

  const SkillItem = styled.li`
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30px;

    ${media.desktop`
      width: 33%;
    `}
  `

  const TitleGroup = styled.div`
    ${media.desktop`
      display: flex;
      margin-bottom: 8rem;
    `}
  `

  const ServiceTitle = styled(SectionTitle)`
    ${media.desktop`
      line-height: normal;
      margin: 0;
      width: 50%;
    `}
  `
  const ServiceSubTitle = styled(SubTitle)`
    ${media.desktop`
      line-height: normal;
      margin: 0;
      width: 50%;
    `}
  `
  return (
    <Section>
      <Container>
        <TitleGroup>
          <ServiceTitle>My area of expertise</ServiceTitle>
          <ServiceSubTitle opacity={0.7}>Flexo empowers you to bring your vision to life by simply copying and pasting components. So you’re not just designing a responsive website — you create a unique experience.</ServiceSubTitle>
        </TitleGroup>
        <SkillsList>
          <SkillItem>Web Development</SkillItem>
          <SkillItem>UI/UX Design</SkillItem>
          <SkillItem>Content Creation</SkillItem>
          <SkillItem>Business Analysis</SkillItem>
          <SkillItem>Videography</SkillItem>
          <SkillItem>Photography</SkillItem>
        </SkillsList>
      </Container>
    </Section>
  )
}

const ProjectsSection = ({ projects }) => {
  const Column = styled.div`
    ${media.desktop`
      width: 50%;
    `}
  `

  const NotFeatured = styled(Column)`
    ${media.desktop`
       display: flex;
       flex-wrap: wrap;
    `}
  `

  const ProjectList = styled.div`
    ${media.desktop`
      display: flex;
    `}
  `
  return (
    <section>
      <Container>
        <SectionTitle style={{ marginBottom: `3rem` }}>Recent projects</SectionTitle>
      </Container>
      <ProjectList>
        {projects.map(({ node }, index) => {
          const isFirst = index === 0

          if (isFirst) {
            return (
              <Column key={node.id}>
                <Link to={`${node.fields.url}`}>
                  <ProjectCard
                    featured
                    image={node.coverImage}
                    title={node.title}
                    category={'video'}
                    subTitle={node.shortDescription}
                  />
                </Link>
              </Column>
            )
          }
        })}
        <NotFeatured>
          {projects.map(({ node }, index) => {
            const isFirst = index === 0

            if (!isFirst) {
              return (
                <Column key={node.id}>
                  <Link to={node.fields.url}>
                    <ProjectCard
                      image={node.coverImage}
                      title={node.title}
                      category={'video'}
                    />
                  </Link>
                </Column>
              )
            }
          })}
        </NotFeatured>
      </ProjectList>
    </section>
  )
}

const HeroTitle = styled(SectionTitle)`
  ${media.desktop`
    font-size: 56px;
    line-height: 60px;
  `}
`

const HeroSubTitle = styled(SubTitle)`
  font-size: 18px;
  opacity: 0.7;
  line-height: 45px;
`

const IndexPage = ({ data }) => {
    const videos = data.allContentfulVideo.edges

    return (
      <Layout>
        <Background>
            <Hero> 
                <HeroImg src={portrait} />
                <HeroContent>
                  <Intro>Hello there</Intro>
                  <HeroTitle>My name is Vince</HeroTitle>
                  <HeroSubTitle>I'm a web dev, videographer, and entrepreneur based in NYC.
                    I made this site using GatsbyJS. It's still a work in progress but feel free to check out my current projects</HeroSubTitle>
                  <ButtonGroup>
                    <Link to="/video/">
                      <Button>SEE MY PROJECTS</Button>
                    </Link>
                  </ButtonGroup>
                </HeroContent>
            </Hero>
            <ServicesSection />
            <ProjectsSection projects={videos} />
        </Background>
      </Layout>
    );
}
export default IndexPage;

export const indexPageQuery = graphql`
  query {
    allContentfulVideo(limit: 5) {
      edges {
        node {
          title
          id
          fields {
            url
          }
          link
          shortDescription
          coverImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`


