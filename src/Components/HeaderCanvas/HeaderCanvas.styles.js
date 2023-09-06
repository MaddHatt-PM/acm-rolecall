import styled from "styled-components";

export const Container = styled.div`
  display: block;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  height: ${props => props.height};
`;

