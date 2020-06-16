/* eslint-disable global-require */
import React from 'react';
import { Container, Content, Main, Partner, Footer } from './styles';
import { images } from './images';

const About: React.FC = () => {
  return (
    <Container id="about">
      <Content>
        <h2>Sobre nós</h2>
        <Main>
          <div className="about">
            <div className="content-about">
              <h5>
                Somos uma empresa com bastante tempo no mercado automotivo. Em
                2020, nos credenciamos a Bosch Car Service e aprimoramos
                significamente nosso serviço. Somos FlyFast!
              </h5>
            </div>
          </div>
          <Partner>
            <div className="partners">
              <p>Parceiros</p>
              {images.map((img) => {
                return (
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${img.img})` }}
                  />
                );
              })}
            </div>
          </Partner>
        </Main>
        <Footer>
          <div className="contact">
            <div className="phones">
              <h5>Entre em contato conosco</h5>
              <div className="simple-phone">
                <img src={require('../../assets/phone.svg')} alt="phone" />
                <p>(85) 2181-7379</p>
              </div>
              <div className="whatsapp">
                <img
                  src={require('../../assets/whatsapp.svg')}
                  alt="whatsapp"
                />
                <p>(85) 98766-6070</p>
              </div>
            </div>
            <div className="social">
              <h5>Siga nossas redes sociais</h5>
              <div className="instagram">
                <img
                  src={require('../../assets/instagram.svg')}
                  alt="instagram"
                />
                <a href="https://www.instagram.com/flyfastautocenter/">
                  <p className="insta">@flyfastautocenter</p>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© FlyFast Autocenter - Todos direitos reservados.</p>
            <div className="dev">
              <img src={require('../../assets/evoxBlack.svg')} alt="evox" />
              <p>Designed by Evox Group</p>
            </div>
          </div>
        </Footer>
      </Content>
    </Container>
  );
};
export default About;
