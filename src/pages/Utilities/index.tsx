import React from 'react';
import {
  Container,
  Content,
  Row,
  Card,
  ServiceContainer,
  Service,
} from './styles';
import { specialties, servicesLeft, servicesRight } from './services';

const Utilities: React.FC = () => {
  return (
    <Container id="services">
      <Content>
        <h2>Nossos serviços</h2>
        <Row>
          {specialties.map((specialty) => {
            return (
              <Card>
                <div style={{ backgroundImage: `url(${specialty.img})` }} />
                <h5>{specialty.title}</h5>
                <p>{specialty.description}</p>
              </Card>
            );
          })}
        </Row>
        <ServiceContainer>
          <div className="card1">
            {servicesLeft.map((service) => {
              return (
                <Service>
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${service.img})` }}
                  />
                  <div className="content">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </Service>
              );
            })}
          </div>
          <div className="card2">
            {servicesRight.map((service) => {
              return (
                <Service>
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${service.img})` }}
                  />
                  <div className="content">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </Service>
              );
            })}
          </div>
        </ServiceContainer>
      </Content>
    </Container>
  );
};

export default Utilities;
