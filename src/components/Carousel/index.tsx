/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container } from './styles';

const Carousel: React.FC = () => {
  return (
    <Container>
      <div className="carousel">
        <ul className="slides">
          <input type="radio" name="radio-buttons" id="img-1" checked />
          <li className="slide-container">
            <div className="slide-image">
              <h5 className="section-title">Estamos de cara nova!</h5>
              <p>
                Venha conhecer as novidades, agora somos uma oficina credenciada
                Bosch Car Service.
              </p>
              <img
                alt="carousel-01"
                src={require('../../assets/carousel-01.jpg')}
              />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-2" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-2" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" />
          <li className="slide-container">
            <div className="slide-image">
              <h5 className="section-title">Tecnologia de ponta!</h5>
              <p>
                Temos os melhores equipamentos para o reparo completo do seu
                automóvel. Venha conferir!
              </p>
              <img
                alt="carousel-01"
                src={require('../../assets/carousel-02.jpg')}
              />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-1" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-1" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-3" />
          <li className="slide-container">
            <div className="carousel-controls">
              <label htmlFor="img-2" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-1" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel-dots">
            <label htmlFor="img-1" className="carousel-dot" id="img-dot-1" />
            <label htmlFor="img-2" className="carousel-dot" id="img-dot-2" />
          </div>
        </ul>
      </div>
    </Container>
  );
};

export default Carousel;
