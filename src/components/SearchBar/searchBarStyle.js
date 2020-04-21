import styled from "styled-components";

export const SearchBarStyle = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-top: 50px;
  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;

  input {
    width: 90%;
    border: 0px;
    height: 40px;
    padding: 0px 10px;
    box-sizing: border-box;
    outline: none;
    font-size: 20px;
  }

  button {
    width: 10%;
    min-width: 113px;
    border: none;
    background-color: #f5f5dc;
    cursor: pointer;
    font-size: 20px;
  }
`;
