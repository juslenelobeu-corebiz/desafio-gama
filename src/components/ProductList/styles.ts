import styled from 'styled-components';

export const ProductListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`