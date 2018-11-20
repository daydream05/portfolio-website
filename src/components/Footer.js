import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  SectionTitle,
  FullHeight,
  SubTitle,
  Container
} from '../components/StyledComponents'

import FacebookIcon from '../icons/facebook.svg'
import TwitterIcon from '../icons/twitter.svg'
import InstagramIcon from '../icons/instagram.svg'
import YoutubeIcon from '../icons/youtube.svg'

const Footer = () => {
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

  const ContentBox = styled.div `
    position: absolute;
    z-index: 1;
    height: 100%;

    > div {
      height: 100%;
    }
  `

  return (
    <section>
      <FullHeight>
        <ContentBox>
          <Container>
            <Content>
              <ActionTitle>Let's work together</ActionTitle>
              <SubTitle opacity={0.7}>You have an idea or business, I have an expertise in how
                to build a successful image on the internet. Let's discuss how to make it
                happen.</SubTitle>
              <ContactInfo>
                <PhoneNumber>937-434-9381</PhoneNumber>
                <Email>ianparulan@gmail.com</Email>
              </ContactInfo>
              <SocialIcons>
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <YoutubeIcon/>
              </SocialIcons>
            </Content>
          </Container>
        </ContentBox>
        <StaticQuery
          query={graphql` { 
            contentfulAsset(title: { eq: "beach dark" }) { title id fluid(quality: 100) { ...GatsbyContentfulFluid_withWebp } } }
            `}
          render={(data) => {
            const {fluid, title} = data.contentfulAsset
            return (<BackgroundImg fluid={fluid} alt={title}/>)
        }}/>
      </FullHeight>
    </section>
  )
}

export default Footer
