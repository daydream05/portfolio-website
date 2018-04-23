import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Typist from 'react-typist';
import './index.css';
import mixedLogo from './vp-logo-mixed.svg';
import vpLogo from './vp-logo.svg';

const Page = styled.div`
  height: 100vh;
  padding-left: 300px;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
`;

const TypistHeader = styled(Typist)`
  font-size: 48px;
  max-width: 800px;
`;

const TypistSubeader = styled(Typist)`
  font-size: 24px;
  margin-top: 16px;
`;

const Intro = styled.span`
  /* Hi, I’m Vince. I’m a: */
  font-size: 48px;
  font-weight: 700;
  color: rgba(0,0,0,0.75);
  margin: 0;
`;

const SubIntro = styled.span`
  color: rgba(0,0,0,0.65);
`;

const SubIntroBlock = styled.div`
  margin-top: 32px;
`;

class IndexPage extends Component {
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    return (
      <div>
        <Page>
            <div>
              <TypistHeader
                avgTypingSpeed={40}
                startDelay={1000}
                onTypingDone={this.onHeaderTyped}
                cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
              >
                <Intro>Hi!</Intro>
                <Typist.Delay ms={500} />
                <Intro> I'm Vince.</Intro>
                <Typist.Delay ms={1500} />
                <br/>
                <Intro>I'm a creative developer,</Intro>
                <Typist.Delay ms={1500} />
                <br/>
                <Intro>And I build websites</Intro>
                <Typist.Backspace count={14} delay={1000} avgTypingSpeed={60}/>
                <Intro>make videos</Intro>
                <Typist.Backspace count={11} delay={1000} avgTypingSpeed={60}/>
                <Intro>design interfaces.</Intro>
                <Typist.Backspace count={20} delay={1000} avgTypingSpeed={60}/>
                <Intro>a little bit of everything.</Intro>
                
              </TypistHeader>
            </div>
            {this.state.renderMsg ? (
              <SubIntroBlock>
                <TypistSubeader
                  startDelay={1000}
                >
                  <SubIntro>Feel free to check out my work before I start adding a paywall </SubIntro>
                  <span>🙃</span>
                </TypistSubeader>
              </SubIntroBlock>
            ) : null }
        </Page>
      </div>
    );
  }
}
export default IndexPage;
