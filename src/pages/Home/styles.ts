import styled from 'styled-components';
import backgroundHome from '../../assets/backgroundHome.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${backgroundHome}) no-repeat right bottom;
  height: 1150px;

  @media (max-width: 1160px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
  position: relative;
`;

export const Deck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  margin: 20px 0px 20px 0px;

  @media (max-width: 1160px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 400px;
    margin: 10px 20px;
    padding: 20px;
    border-radius: 16px;
    border: 0.5px solid #ccc;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);

    @media (max-width: 1160px) {
      flex-direction: row;
      justify-content: space-between;
      max-width: 100%;
      width: 100%;
    }

    @media (max-width: 462px) {
      flex-direction: column;
      justify-content: center;
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
  }
`;

export const Estimate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  max-width: 100%;
  padding: 0 20px;
  margin-bottom: 120px;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    height: 200px;
    padding-right: 20px;
    width: 100%;
    background: #00304b;
    border-radius: 16px 0px 0px 16px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);

    @media (max-width: 767px) {
      padding: 10px;
      align-items: center;
      border-radius: 16px 16px 0px 0px;
      margin-left: 20px;
      margin: 0 20px;
    }

    a {
      text-decoration: none;
    }

    p {
      text-align: end;
      color: #fff;
      font-size: 2rem;
      font-weight: bold;

      @media (max-width: 767px) {
        text-align: center;
      }

      @media (max-width: 350px) {
        font-size: 1.5rem;
      }
    }

    button {
      padding: 20px;
      background: transparent;
      border: 2px solid #fff;
      text-transform: uppercase;
      color: #fff;

      @media (max-width: 767px) {
        margin: 20px 0;
      }

      &:hover {
        background: #17425a;
        color: #fff;
        font-weight: bold;
        box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
      }
    }
  }

  img {
    border-radius: 0px 16px 16px 0px;
    max-height: 200px;
    width: 100%;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);

    @media (max-width: 767px) {
      border-radius: 0px 0px 16px 16px;
      margin: 0;
    }
  }
`;
