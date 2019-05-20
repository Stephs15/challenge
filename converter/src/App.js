import React from 'react';
import styled from 'styled-components'
import './App.css';
import ConverterContainer from './components/ConverterContainer'

const StyledApp = styled.div `
  width: 90%;
  min-height: 300px;
  margin: 40px auto;
  background-color: #282828;
  padding: 20px;
  border-radius: 6px;
  @media screen and (min-width: 720px) {
    width: 60%;
  }
`

function App() {
  return (
    <StyledApp className="App">
      <ConverterContainer></ConverterContainer>
    </StyledApp>
  );
}

export default App;
