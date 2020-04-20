import styled from 'styled-components';

export const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: auto;
  min-height: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
  padding: 20px;
  box-sizing: border-box;

  figure {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0 10px 20px #ccc;
    margin: 0px;

    img {
      width: 100%;
    }
  }
`