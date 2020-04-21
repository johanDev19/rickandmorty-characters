import React from "react";
import styled from "styled-components";

import Character from "./components/Character";
import { Store } from "./Store";

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;
function App() {
  return (
    <Store>
      <Container className="App">
        <Character />
      </Container>
    </Store>
  );
}

export default App;
