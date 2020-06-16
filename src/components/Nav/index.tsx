/* eslint-disable global-require */
import React from 'react';
import { Navbar } from './styles';

const Nav: React.FC = () => {
  return (
    <Navbar>
      <div>
        <img
          src={require('../../assets/flyfast-newlogo.png')}
          alt="fly-fast-logo"
        />
        <h4>Voando na velocidade da sua necessidade</h4>
      </div>
      <ul>
        <a href="#home">Início</a>
        <a href="#services">Serviços</a>
        <a href="#structure">Estrutura</a>
        <a href="#location">Localização</a>
        <a href="#about">Sobre</a>
      </ul>
      <img
        className="bosch-logo"
        src={require('../../assets/bcs_logo.png')}
        alt="bosch-logo"
      />
    </Navbar>
  );
};
export default Nav;
