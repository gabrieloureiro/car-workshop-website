import styled from 'styled-components';
import backgroundStructure from '../../assets/backgroundStructure.svg';
import backgroundMain from '../../assets/backgroundMain.svg';
import image from '../../assets/img-05.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 900px;
  /* background: url(${backgroundStructure}) no-repeat center; */
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
  max-width: 100%;
  max-height: 100%;
  position: relative;
  width: 100%;

  h2 {
    margin-top: 100px;
  }
`;

export const Main = styled.div`
  width: 1350px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  height: 500px;

  @media (max-width: 1350px) {
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
  }

  .about {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    border-radius: 16px;
    border: 0.5px solid #ccc;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
    background: #fff;
    margin-right: 100px;
    height: 100%;
    background: url(${image}) no-repeat center;
    background-size: cover;
    width: 912px;

    @media (max-width: 1350px) {
      width: 100%;
      margin-right: 0px;
      border-radius: 16px 8px 16px 16px;
    }

    .content-about {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 328.5px;
      height: 328.5px;
      border-radius: 0px 0px 16px 0px;
      background: url(${backgroundMain}) no-repeat;

      h5 {
        line-height: 1.15rem;
        color: #fff;
        text-align: end;
        max-width: 200px;
        padding: 20px;
      }
    }
  }
`;

export const Partner = styled.div`
  border-radius: 16px 0px 0px 16px;
  border: 0.5px solid #ccc;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  background: #fff;
  width: 500px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 1350px) {
    width: 100%;
    margin-top: 20px;
  }

  .partners {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    p {
      font-size: 1.5rem;
      font-weight: bold;
      color: #000000;
    }
  }

  .image {
    background-position: center;
    background-size: fill;
    width: 300px;
    height: 100px;
    padding: 0 80px;
    margin: 20px 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  margin-top: 0px;
  width: 100%;
  background: #fff;
  height: 150px;

  .contact {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    background: #00304b;
    padding: 10px 20px;

    .phones,
    .social {
      display: flex;
      flex-direction: column;

      .simple-phone,
      .whatsapp,
      .instagram {
        display: flex;
        flex-direction: row;

        .insta {
          &:hover {
            font-weight: bold;
          }
        }

        a {
          text-decoration: none;
        }

        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }

    h5 {
      font-weight: normal;
      color: #fff;
      font-size: 1rem;
      line-height: 1rem;
      margin-bottom: 10px;
    }

    p {
      font-weight: normal;
      color: #fff;
      font-size: 0.75rem;
    }

    img {
      width: 120px;
      height: 60px;
    }
  }

  .copyright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 20px;
    align-items: center;

    p {
      font-size: 0.5rem;
      @media (max-width: 767px) {
        max-width: 150px;
      }
    }

    .dev {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }

    p {
      font-size: 0.75rem;
    }
  }
`;
