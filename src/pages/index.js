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
  SectionTitle
} from '../components/StyledComponents'

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 36px;
`

const Intro = styled.h1`
  font-size: 14px;
  font-weight: normal;
  margin-top: 0;
  color: ${props => props.theme.colors.white};
`

const ButtonGroup = styled.div`
  margin-top: 8rem;
  align-self: center;
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
  const SkillsList = styled.ul``

  const SkillItem = styled.li`
  font-family: TeXGyreAdventor-Regular;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 30px;
`
  return (
    <section>
      <Container>
        <SectionTitle>My area of expertise</SectionTitle>
        <SubTitle opacity={0.7}>Flexo empowers you to bring your vision to life by simply copying and pasting components. So you’re not just designing a responsive website — you create a unique experience.</SubTitle>
        <SkillsList>
          <SkillItem>Web Development</SkillItem>
          <SkillItem>UI/UX Design</SkillItem>
          <SkillItem>Content Creation</SkillItem>
          <SkillItem>Business Analysis</SkillItem>
          <SkillItem>Videography</SkillItem>
          <SkillItem>Photography</SkillItem>
        </SkillsList>
      </Container>
    </section>
  )
}

const ProjectsSection = ({ projects }) => {
  return (
    <section>
      {projects.map(({ node }, index) => {
        // const isFirst = index === 0
        return (
          <ProjectCard
            key={node.id}
            image={node.coverImage}
            title={node.title}
            category={'video'}
            subTitle={node.shortDescription}
          />
        )
      })}
    </section>
  )
}


const IndexPage = ({ data }) => {
    const videos = data.allContentfulVideo.edges

    return (
      <Layout>
        <Background>
            <Hero> 
                <HeroContent>
                  <Intro>Hello there</Intro>
                  <SectionTitle>My name is Vince</SectionTitle>
                  <SubTitle>I am an aspiring web developer, videographer and entrepreneur based in NYC. I didn’t really know what to do so I just gave all those things a shot. Turns out, I enjoy all of them! </SubTitle>
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


