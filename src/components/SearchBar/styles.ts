import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rebeccapurple;
  padding: 20px 0;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`

export const InputGroup = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
`

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: #212121;
  color: #999;
  outline: none;
`