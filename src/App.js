import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './themes';
import GlobalStyles from './GlobalStyles';
import Home from './landing/Home';
import Projects from './landing/components/Projects';
import Contact from './landing/components/Contact';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  transition: background-color 0.5s, color 0.5s;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <AppWrapper>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
