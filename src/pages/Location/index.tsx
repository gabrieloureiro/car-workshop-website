/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { Container, Content } from './styles';

const Location: React.FC = () => {
  return (
    <Container id="location">
      <Content>
        <h2>Onde nos encontrar?</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0033487539736!2d-38.55817698464661!3d-3.8093556446576327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74e6e6269aacf%3A0xa603a6282003ed29!2sRua%20Benjamim%20Brasil%2C%202350a%20-%20Jardim%20Cearense%2C%20Fortaleza%20-%20CE%2C%2060761-515!5e0!3m2!1spt-BR!2sbr!4v1592230240950!5m2!1spt-BR!2sbr"
          frameBorder="0"
          allowFullScreen={false}
          aria-hidden={false}
          tabIndex={0}
        />
      </Content>
    </Container>
  );
};

export default Location;
