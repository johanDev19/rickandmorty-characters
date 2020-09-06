import React from "react";
import styled from "styled-components";

import { Home } from "./pages/home";
import { Store } from "./Store";

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

function App() {
  return (
    <Store>
      <Container>
        <Home />
      </Container>
    </Store>
  );
}

export default App;
