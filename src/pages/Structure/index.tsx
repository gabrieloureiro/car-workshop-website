import React from 'react';
import { Container, Content, Row } from './styles';
import { firstImages, secondImages } from './images';

const Structure: React.FC = () => {
  return (
    <Container id="structure">
      <Content>
        <h2>Nossa estrutura</h2>
        <Row>
          {firstImages.map((img) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${img.img})`,
                }}
              />
            );
          })}
        </Row>
        <Row>
          {secondImages.map((img) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${img.img})`,
                }}
              />
            );
          })}
        </Row>
      </Content>
    </Container>
  );
};

export default Structure;
