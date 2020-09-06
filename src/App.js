import React from "react";
import styled from "styled-components";

import { Characters } from "./components/Characters";
import SearchBar from "./components/SearchBar";

import { Store } from "./Store";

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

function App() {
  return (
    <Store>
      <Container className="App">
        <SearchBar />
        <Characters />
      </Container>
    </Store>
  );
}

export default App;
