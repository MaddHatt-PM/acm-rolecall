import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const SafeArea = styled.div`
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
`;

export const Overlay = styled.div`
position: absolute;
z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
`

export const CenteredOverlay = styled.div`
position: relative;
  width: 100%;
  margin: auto 0 auto 0;
`;

export const H1 = styled.h1`
  width: 100%;
  font-size: 10vw;
  text-shadow: 0 calc(10vw/20) #cab9a0;
  text-align: center;
  filter: drop-shadow(0 4px 4px #00000076 );
  line-height: 2vw;
  `;

export const H2 = styled.h2`
  font-size: 4vw;
  text-shadow: 0 calc(4vw/20) #cab9a0;
  text-align: center;
  filter: drop-shadow(0 4px 4px #000000c3 );
  /* filter: drop-shadow(0 4px 60px #00000045 ); */
  /* line-height: 0; */
`;

export const QRCode = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`