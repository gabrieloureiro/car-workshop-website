import React from 'react';
import GlobalStyle from './styles/global';
import Nav from './components/Nav';
import Home from './pages/Home';
import Utilities from './pages/Utilities';
import Structure from './pages/Structure';
import Location from './pages/Location';
import About from './pages/About';
import Drawer from './components/Drawer';

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Drawer />
      <Home />
      <Utilities />
      <Structure />
      <Location />
      <About />
      <GlobalStyle />
    </>
  );
};

export default App;
