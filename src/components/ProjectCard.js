import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Container, SubTitle } from '../components/StyledComponents'

import { media } from '../utils/media';

const Card = styled.article`
  width: 100%;
  height: 375px;
  background: #141618;

  ${media.phablet`
    height: inherit;
  `}
  ${media.desktop`
    height: 100%;
    border-right: 1px solid #505055;
    border-bottom: 1px solid #505055;
  `}
`
const ImgContainer = styled.div`
  position: relative;

  &::before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }
`

const ProjectImg = styled(Img)`
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`

const ProjectCardTitle = styled.h5`
  font-size: 18px;
  color: ${props => props.theme.white};
  letter-spacing: 0;
  line-height: 30px;
`
const ProjectCardSubTitle = styled(SubTitle)`
`
const ProjectCardCategory = styled.span`
  margin-top: 2rem;
  font-size: 14px;
  opacity: 0.8;
`
const ProjectCardContainer = styled(Container)`
  ${media.desktop`
    padding: 2rem 1rem;
  `}
`

const FeaturedCard = (props) => {
  const BgImg = styled(Img)`
    position: absolute !important;
    width: 100%;
    height: inherit;
    object-fit: cover;
    object-position: center;
  `

  const Title = styled.h5`
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 45px;
  `

  const SubTitle = styled.p`
    opacity: 0.7;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30px;
  `
  const FeaturedContentContainer = styled.div`
    position: absolute;
    padding: 3rem;
  `

  return (
    <Card>
      <BgImg fluid={props.image.fluid} />
      <FeaturedContentContainer>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </FeaturedContentContainer>
    </Card>
  )
}


const ProjectCard = (props) => {
  return (
      props.featured ? 
        <FeaturedCard {...props} /> :
        <Card>
          <ImgContainer>
            <ProjectImg fluid={props.image.fluid} />
          </ImgContainer>
          <ProjectCardContainer>
            <ProjectCardTitle>{props.title}</ProjectCardTitle>
            {props.subTitle && <ProjectCardSubTitle>{props.subTitle}</ProjectCardSubTitle>}
            <ProjectCardCategory>{props.category}</ProjectCardCategory>
          </ProjectCardContainer>
        </Card>
  )
}

export default ProjectCard