import styled from "styled-components";

export const ButtonToTopContainer = styled.div`
  position: relative;

  button {
    position: fixed;
    background: transparent;
    border: none;
    cursor: pointer;
    bottom: 40px;
    right: 25px;
    z-index: 5;
  }
`