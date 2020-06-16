import styled from 'styled-components';
import backgroundService from '../../assets/backgroundService.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background: url(${backgroundService}) no-repeat top right;
  background-color: #fff;

  h2 {
    font-size: 3rem;
    color: #00304b;
    text-align: center;
    @media (max-width: 1024px) {
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
  position: relative;
  max-width: 100%;
  top: 100px;
  margin-bottom: 150px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 20px 0px 20px 0px;
  padding: 0 20px;

  @media (max-width: 1160px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;
  margin: 10px 20px;
  padding: 20px;
  border-radius: 16px;
  border: 0.5px solid #ccc;
  background: #fff;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 1160px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }

  div {
    min-width: 85px;
    height: 85px;
    border-radius: 50%;
    background: #00304b;
    background-size: fill;
    background-position: center;
    background-repeat: no-repeat;
  }

  h5 {
    margin: 10px 10px;
    font-size: 1.25rem;
  }

  p {
    max-width: 250px;
    text-align: center;
    line-height: 1.25rem;

    @media (max-width: 1160px) {
      max-width: 100%;
      text-align: end;
    }

    @media (max-width: 450px) {
      text-align: center;
    }
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .card1 {
    margin-right: 40px;
  }

  .card1,
  .card2 {
    display: flex;
    flex-direction: column;
    width: 600px;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    width: 100%;
    .card1,
    .card2 {
      width: 100%;
      padding: 0 20px;
    }
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border: 0.5px solid #ccc;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  margin-top: 20px;

  /* @media (max-width: 1250px) {
    margin: 20px 20px 0px 20px;
    width: 100%;
  } */

  h5 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 10px;
    font-size: 0.75rem;
  }

  .img {
    min-width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #36698d;
    background-size: fill;
    background-position: center;
    background-repeat: no-repeat;
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: end;
    width: 100%;
  }
`;
