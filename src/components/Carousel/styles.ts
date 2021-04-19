import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  ul.slides {
    display: block;
    position: relative;
    height: 600px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
  }

  .slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }

  ul.slides input {
    display: none;
  }

  .slide-container {
    display: block;
  }

  .slide-image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    transition: all 0.7s ease-in-out;

    h5,
    p {
      position: absolute;
      right: 100px;
      top: 50%;
      color: #fff;
      text-shadow: 2px 2px 2px black;
      text-align: end;
      margin-left: 100px;

      @media (max-width: 905px) {
        top: 40%;
      }

      @media (max-width: 566px) {
        top: 30%;
        right: 0;
        margin: 0 auto;
        text-align: center;
      }
    }

    p {
      top: 70%;
    }
  }

  .slide-image img {
    width: auto;
    min-width: 100%;
    height: 100%;
  }

  .carousel-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    font-size: 100px;
    line-height: 600px;
    color: #fff;
  }

  .carousel-controls label {
    display: none;
    position: absolute;
    padding: 0 20px;
    opacity: 0;
    transition: opacity 0.2s;
    cursor: pointer;
  }

  .slide-image:hover + .carousel-controls label {
    opacity: 0.5;
  }

  .carousel-controls label:hover {
    opacity: 1;
  }

  .carousel-controls .prev-slide {
    width: 49%;
    text-align: left;
    left: 0;
  }

  .carousel-controls .next-slide {
    width: 49%;
    text-align: right;
    right: 0;
  }

  .carousel-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 1;
    text-align: center;
  }

  .carousel-dots .carousel-dot {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    margin: 10px;
  }

  input:checked + .slide-container .slide-image {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
  }

  input:checked + .slide-container .carousel-controls label {
    display: block;
  }

  input#img-1:checked ~ .carousel-dots label#img-dot-1,
  input#img-2:checked ~ .carousel-dots label#img-dot-2,
  input#img-3:checked ~ .carousel-dots label#img-dot-3,
  input#img-4:checked ~ .carousel-dots label#img-dot-4,
  input#img-5:checked ~ .carousel-dots label#img-dot-5,
  input#img-6:checked ~ .carousel-dots label#img-dot-6 {
    opacity: 1;
  }

  input:checked + .slide-container .nav label {
    display: block;
  }
`;