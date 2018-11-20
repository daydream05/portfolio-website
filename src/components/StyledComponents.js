import styled from 'styled-components'

export const Background = styled.div `
  background-color: ${props => props.theme.colors.primaryBackground};
`

export const Container = styled.div`
  padding: 24px 36px;
  width: 100%;
`

export const FullHeight = styled.div `
  height: 100vh;
`

export const SectionTitle = styled.h2 `
  font-size: 28px;
  color: ${props => props.theme.colors.white};
  letter-spacing: 0;
  line-height: 60px;
  margin: 1rem 0;
`

export const SubTitle = styled.p `
  font-size: 16px;
  letter-spacing: 0;
  line-height: 36px;
  opacity: ${props => props.opacity};
`