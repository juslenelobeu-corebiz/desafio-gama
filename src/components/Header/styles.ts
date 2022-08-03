import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #E21A22;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 1rem 0.5rem;
  }
`

export const ButtonIconMinicart = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: #1040a0;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
  }
`