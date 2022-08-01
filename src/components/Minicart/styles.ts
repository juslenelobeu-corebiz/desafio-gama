import styled from "styled-components";

export const MinicartContainer = styled.section`
  width: 300px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5vh;
  right: 0;
  background-color: #fff;
  padding: 1rem;
  border: thin solid;
  /* display: none; */
`

export const MinicartContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MinicartHeader = styled.header`
  height: 7%;
  border: thin solid;
`

export const MinicartListItems = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: thin solid;
  overflow-y: scroll;
`

export const MinicartListItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  border: thin solid;
`

export const MinicartFooter = styled.footer`
  width: 100%;
  height: 13%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: thin solid;
`

export const MinicartTotalValue = styled.div`
  display: flex;
  justify-content: space-between;
`