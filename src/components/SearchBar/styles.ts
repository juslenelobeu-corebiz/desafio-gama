import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  span {
    display: block;
    margin-top: .5rem;
  }

  @media (max-width: 768px) {
    width: auto;
    max-width: 280px;
  }
`

export const InputGroup = styled.div`
  display: flex;

  button {
    width: 20%;
  }

  @media (max-width: 768px) {
    input {
      width: 60%;
    }
  }
  @media (max-width: 576px) {
    button {
      width: 40%;
    }
  }
`

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  color: #999;
  outline: none;
`