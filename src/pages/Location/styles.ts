import styled from 'styled-components';
import locationBackground from '../../assets/locationBackground.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 950px;
  background: url(${locationBackground}) no-repeat center;
  background-color: #fff;

  @media (max-width: 767px) {
    height: 100%;
  }

  h2 {
    font-size: 3rem;
    color: #00304b;
    margin: 0px 0px 20px 0px;
    text-align: center;

    @media (max-width: 767px) {
      text-shadow: 2px 2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
        -2px -2px 0 #fff, 2px 0px 0 #fff, 0px 2px 0 #fff, -2px 0px 0 #fff,
        0px -2px 0 #fff;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  width: 1350px;
  position: relative;
  top: 100px;

  @media (max-width: 1350px) {
    width: 100%;
    margin: 0 20px;
    margin-bottom: 150px;
  }

  iframe {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    width: 100% !important;
    height: 700px;
  }
`;
