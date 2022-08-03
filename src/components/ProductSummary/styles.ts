import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  text-align: center;
  padding: 0 .5rem .5rem .5rem;
  border: thin solid #fff;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  &:hover {
    border-color: #1040a0;
    background-color: #1040a0;
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);

    h3, p {
      color: #fff;
    }

    button {
      background-color: #E21A22;
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-family: 'Barlow Condensed', sans-serif;
  }

  p {
    font-family: 'Barlow Condensed', sans-serif;
  }
`