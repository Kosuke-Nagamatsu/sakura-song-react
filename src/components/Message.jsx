import styled, { keyframes } from 'styled-components';
import { Container } from '@mui/material';
import { bounce } from 'react-animations';

// バウンドアニメーションの設定
// https://formidable.com/open-source/react-animations/
const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export const Message = () => {
  return (
    <SDiv>
      <BouncyDiv>
        <STitle>Do you know sakura?</STitle>
      </BouncyDiv>
      <Container maxWidth="sm">
        <SP>
          It's the cherry blossom that blooms all over Japan in spring and so beautiful!<br />
          You gave me helpful advice from Japan and Africa, so I sang you a song called Sakura.<br />
          <SSpan>I made a few mistakes. haha</SSpan>
        </SP>
      </Container>
    </SDiv>
  );
}

const SDiv = styled.div`
  color: #fff;
  background-color: #161616;
  padding: 0.1rem 0;
`;

const STitle = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
  letter-spacing: 0.4em;
  text-align: center;
`;
const SP = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
  letter-spacing: 0.1em;
`;

const SSpan = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.2em;
`;