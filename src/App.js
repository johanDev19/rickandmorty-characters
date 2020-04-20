import React from 'react';
import styled from 'styled-components';

import Character from './components/Character';

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`
function App() {
  return (
    <Container className="App">
     <Character />
    </Container>
  );
}

export default App;
