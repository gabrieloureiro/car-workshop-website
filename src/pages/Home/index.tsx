/* eslint-disable global-require */
import React from 'react';
import { weAccept } from './weAccept';
import { Container, Content, Deck, Estimate } from './styles';
import Carousel from '../../components/Carousel';

const Home: React.FC = () => {
  return (
    <Container id="home">
      <Carousel />
      <Content>
        <Deck>
          {weAccept.map((card) => {
            return (
              <div>
                <img alt={card.alt} src={card.logo} />
                <p>{card.description}</p>
              </div>
            );
          })}
        </Deck>
        <Estimate>
          <div>
            <p>Nossa prioridade é o seu carro!</p>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5585987666070">
              <button type="button">Solicitar orçamento</button>
            </a>
          </div>
          <img src={require('../../assets/ghost.jpg')} alt="ghost" />
        </Estimate>
      </Content>
    </Container>
  );
};

export default Home;
