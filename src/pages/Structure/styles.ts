import styled from 'styled-components';
import backgroundStructure from '../../assets/backgroundStructure.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 950px;
  background: url(${backgroundStructure}) no-repeat center;
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
  max-width: 100%;
  position: relative;
  top: 100px;
  margin-bottom: 150px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 0px 20px;
  }

  div {
    border: 0.5px solid #ccc;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    margin: 60px 20px;
    width: 400px;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 450px) {
      width: 100%;
      margin: 20px 20px;
    }
  }
`;
