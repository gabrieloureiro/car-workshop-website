/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';

const Drawer: React.FC = () => {
  const menuBtn = document.querySelector('.drawer-icon-visible');
  const collapse = document.querySelector('.drawer-menu');
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (collapsed && !menuBtn?.classList.contains('active')) {
      menuBtn?.classList.add('active');
      collapse?.classList.add('drop');
      setCollapsed(true);
    }
    if (!collapsed && menuBtn?.classList.contains('active')) {
      menuBtn?.classList.add('active');
      collapse?.classList.add('drop');
      setCollapsed(false);
    }
  }, [collapsed, menuBtn, collapse]);

  return (
    <Container>
      <div className="drawer-header">
        <img
          alt="drawer-logo"
          src={require('../../assets/flyfast-newlogo.png')}
        />
        <div className="icon">
          <svg
            className="drawer-icon drawer-icon-visible"
            viewBox="0 0 100 100"
            width="80"
            onClick={
              (menuBtn?.addEventListener,
              'click',
              () => {
                if (!collapsed) {
                  menuBtn?.classList.add('active');
                  if (collapse?.classList.contains('up')) {
                    collapse?.classList.remove('up');
                  }
                  collapse?.classList.add('drop');
                  setCollapsed(true);
                } else {
                  menuBtn?.classList.remove('active');
                  if (collapse?.classList.contains('up')) {
                    collapse?.classList.remove('up');
                  }
                  collapse?.classList.replace('drop', 'up');
                  setCollapsed(false);
                }
              })
            }
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
        </div>
      </div>
      <div className="drawer-menu">
        <ul>
          <a href="#home">
            <div>Início</div>
          </a>
          <a href="#services">
            <div>Serviços</div>
          </a>
          <a href="#structure">
            <div>Estrutura</div>
          </a>
          <a href="#location">
            <div>Localização</div>
          </a>
          <a href="#about">
            <div>Sobre</div>
          </a>
        </ul>
      </div>
    </Container>
  );
};

export default Drawer;
