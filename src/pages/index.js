import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

import FacebookIcon from '../icons/facebook.svg'
import TwitterIcon from '../icons/twitter.svg'
import InstagramIcon from '../icons/instagram.svg'
import YoutubeIcon from '../icons/youtube.svg'

const Background = styled.div`
  background-color: ${props => props.theme.colors.primaryBackground};
`

const Container = styled.div `
  padding: 24px 36px;
  width: 100%;
  height: 100%;
`

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 36px;
`

const Intro = styled.h1`
  font-size: 14px;
  font-weight: normal;
  margin-top: 0;
  color: ${props => props.theme.colors.white};
`

const SectionTitle = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.white};
  letter-spacing: 0;
  line-height: 60px;
  margin: 1rem 0;
`

const SubTitle = styled.p`
  font-size: 16px;
  letter-spacing: 0;
  line-height: 36px;
  font-family: TeXGyreAdventor-Regular;
  opacity: ${props => props.opacity};
`

const ButtonGroup = styled.div`
  margin-top: 3rem;
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

const FullHeight = styled.div`
  height: 100vh;
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

const CallToActionSection = () => {
  const ActionTitle = styled(SectionTitle)`
    font-size: 36px;
    line-height: 55px;
    max-width: 300px;
  `

  const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
  `

  const PhoneNumber = styled.a`
    font-size: 24px;
    letter-spacing: 0;
    line-height: 30px;
    margin-bottom: 18px;
  `

  const Email = styled(PhoneNumber)``

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  `

  const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 7rem 1rem 0;

    svg {
      width: 24px;
      height: 24px;
    }
  `
  const BackgroundImg = styled(Img)`
    width: 100%;
    height: 100vh;
    z-index: 0;
    opacity: 0.5;
  `

  const ContentBox = styled.div`
    position: absolute;
    z-index: 1;
    height: 100%;
  `

  return (
    <section>
      <FullHeight>
        <ContentBox>
          <Container>
            <Content>
              <ActionTitle>Let's work together</ActionTitle>
              <SubTitle opacity={0.7}>You have an idea or business, I have an expertise in how to build a successful image on the internet. Let's discuss how to make it happen.</SubTitle>
              <ContactInfo>
                <PhoneNumber>937-434-9381</PhoneNumber>
                <Email>ianparulan@gmail.com</Email>
              </ContactInfo>
              <SocialIcons>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YoutubeIcon />
              </SocialIcons>
            </Content>
          </Container>
        </ContentBox>
        <StaticQuery
          query={graphql`
            {
              contentfulAsset(title: { eq: "beach dark" }) {
                title
                id
                fluid(quality: 100) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          `}
          render={(data) => {
            const { fluid, title } = data.contentfulAsset
            return (
              <BackgroundImg fluid={fluid} alt={title} />
            )
          }}
        />
      </FullHeight>
    </section>
  )
}

const IndexPage = () => {
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
            <CallToActionSection />
        </Background>
      </Layout>
    );
}
export default IndexPage;


