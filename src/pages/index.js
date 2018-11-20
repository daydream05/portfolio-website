import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import Layout from '../components/Layout'

import ProjectCard from '../components/ProjectCard'

import {
  Background,
  Container,
  SubTitle,
  Section,
  SectionTitle
} from '../components/StyledComponents'

import { media } from '../utils/media'

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  ${media.desktop`
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: auto;
  `}
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 36px;
  
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
  margin-top: 8rem;
  align-self: center;

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
      <ProjectList>
        {projects.map(({ node }, index) => {
          const isFirst = index === 0

          if (isFirst) {
            return (
              <Column key={node.id}>
                <ProjectCard
                  image={node.coverImage}
                  title={node.title}
                  category={'video'}
                  subTitle={node.shortDescription}
                />
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
                  <ProjectCard
                    image={node.coverImage}
                    title={node.title}
                    category={'video'}
                  />
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
                <HeroContent>
                  <Intro>Hello there</Intro>
                  <HeroTitle>My name is Vince</HeroTitle>
                  <HeroSubTitle>I am an aspiring web developer, videographer and entrepreneur based in NYC. I didn’t really know what to do so I just gave all those things a shot. Turns out, I enjoy all of them! </HeroSubTitle>
                  <ButtonGroup>
                    <Button>SEE MY PROJECTS</Button>
                  </ButtonGroup>
                </HeroContent>
            </Hero>
            <ServicesSection />
            <ProjectsSection projects={videos} />
            <Footer />
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


