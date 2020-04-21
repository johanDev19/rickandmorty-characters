import styled from 'styled-components';

export const CardStyle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: auto;
  min-width: 400px;
  min-height: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
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
`;

export const CardContent = styled.div`
  align-self: flex-start;
`;
