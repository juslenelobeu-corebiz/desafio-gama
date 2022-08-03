import styled from 'styled-components';

export const Main = styled.main`
  width: 80%;
  min-height: 550px;
  margin: 2rem auto 0 auto;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`