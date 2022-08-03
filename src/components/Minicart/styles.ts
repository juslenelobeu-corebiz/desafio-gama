import styled from "styled-components";

export const MinicartContainer = styled.section`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: #1040a0;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 1rem;
`

export const MinicartContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MinicartHeader = styled.header`
  height: 7%;

  h3 {
    font-size: 1.5rem;
    color: #fff;

    span {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: .3rem;
      margin-left: .5rem;
    }
  }
`

export const MinicartListItems = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  background-color: #f1f1f1;
`

export const MinicartListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;

  button {
    background-color: #E21A22;
    width: 25px;
    height: 25px;
    padding: 0;
  }
`

export const MinicartFooter = styled.footer`
  width: 100%;
  height: 13%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
  }
`

export const MinicartTotalValue = styled.div`
  display: flex;
  justify-content: space-between;
`