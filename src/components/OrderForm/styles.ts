import styled from 'styled-components';

export const OrderFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-family: 'Barlow Condensed', sans-serif;
  }

  h2 {
    font-size: 2rem;
    font-family: 'Barlow Condensed', sans-serif;
  }

  h3 {
    font-size: 1.5rem;
    font-family: 'Barlow Condensed', sans-serif;
  }

  table {
    width: 100%;
    max-width: 600px;
    margin: 2rem auto;
    color: #333;

    thead {
      background-color: #f5f5f5;
      
      th {
        font-weight: bold;
        text-align: center;
        font-size: 1.2rem;
        padding: .5rem;
        font-family: 'Barlow Condensed', sans-serif;
      }
    }
    tr {
      display: flex;
      align-items: center;
      justify-content: space-around;
      
      td {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        font-size: 1rem;
        border: thin solid #f5f5f5;
        font-family: 'Barlow Condensed', sans-serif;
      }
    }
    tfoot {
      td {
        font-weight: bold;
        font-family: 'Barlow Condensed', sans-serif;
      }
    }
  }
`