import styled from "styled-components";
import bgImage from "../../images/bg.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 100vp;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

// Background Photo by Kai Pilger on Unsplash
