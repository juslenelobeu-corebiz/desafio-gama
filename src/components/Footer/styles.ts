import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: rebeccapurple;
    text-decoration: none;

    &:hover {
      opacity: .8;
      text-decoration: underline;
    }
  }
`