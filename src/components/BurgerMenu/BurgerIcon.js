import React from "react";
import styled from "styled-components";
import posed from "react-pose";

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 40px;
  top: 40px;
  z-index: 9999;
  width: 48px;
  height: 48px;
  overflow: hidden;
`;

const Hamburger = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Cross = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
`;

const BarStyle = styled.span`
  display: block;
  width: 100%;
  height: 12px;
  background-color: white;
`;

const CloseBar1 = styled(BarStyle)`
  display: none;
  height: 100%;
  width: 12px;
  position: absolute;
  left: 50%;
  margin-left: -6px;
`;

const CloseBar2 = styled(BarStyle)`
  display: none;
  position: absolute;
  top: 50%;
  margin-top: -6px;
`;

// Needed to make existing styled components posable. (Is that even a word?)
const ComponentCloseBar1 = React.forwardRef((props, ref) => <CloseBar1 {...props} ref={ref}/>)
const ComponentCloseBar2 = React.forwardRef((props, ref) => <CloseBar2 {...props} ref={ref} />)
const Bar = React.forwardRef((props, ref) => <BarStyle {...props} ref={ref}/>)

const transition = {
  duration: 400
};

// We add or subtract 12px because without it,
// the cross would still show up in the corner
// Idk how the math works but i just assumed that
// i should offset using the width of the line.
const PosedCloseBar1 = posed(ComponentCloseBar1)({
  closed: {
    y: "calc(-100% - 12px)",
    transition,
    display: 'block',
  },
  open: {
    y: 0,
    transition,
    display: 'none',
  }
});

const PosedCloseBar2 = posed(ComponentCloseBar2)({
  closed: {
    x: "calc(100% + 12px)",
    transition,
    display: 'block',
  },
  open: {
    x: 0,
    transition,
    display: 'none',
  }
});

const LineBar = posed(Bar)({
  closed: {
    x: 0,
    transition
  },
  open: {
    x: "-100%",
    transition
  }
});

const Stagger = posed.div({
  open: {
    staggerChildren: 100
  },
  closed: {
    staggerChildren: 100,
    staggerDirection: -1
  }
});

const BurgerMenu = ({ isOpen, ...props }) => {
  return (
    <Stagger pose={isOpen ? "open" : "closed"}>
      <Container {...props}>
        <Hamburger>
          <LineBar />
          <LineBar />
          <LineBar />
        </Hamburger>
        <Cross>
          <PosedCloseBar1 />
          <PosedCloseBar2 />
        </Cross>
      </Container>
    </Stagger>
  );
};

export default BurgerMenu;
