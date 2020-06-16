import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  left: 0;
  display: none;
  position: fixed;
  top: 0;
  right: 6px;
  height: 100px;
  z-index: 3;

  @media (max-width: 1000px) {
    display: block;
  }

  .drawer-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #00304b;

    img {
      width: 120px;
      height: 60px;
      margin-left: 20px;

      @media (max-width: 374px) {
        margin: 20px;
      }
    }
  }

  .drawer-menu {
    position: relative;
    top: 100px;
    transform: translateY(-87%) rotateX(90deg);
    display: block;

    ul {
      display: flex;
      flex-direction: column;
      text-align: center;

      a {
        font-size: 0.75rem;
        text-decoration: none;
        color: #000;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
        border-top: 1px solid ${shade(0.45, '#fff')};
        border-bottom: 1px solid ${shade(0.45, '#fff')};
        background: #fff;

        &:nth-child(1) {
          border-top: 0;
        }
        &:nth-child(6) {
          border-top: 0;
          border-bottom: 0;
        }

        & + a {
          border-top: 0;
        }

        &:hover {
          background: #17425a;
          font-weight: bold;
          color: #fff;
        }

        div {
          width: 100%;
          cursor: pointer;
          margin: 20px 0;
        }
      }
    }
  }

  .drawer-menu.drop {
    display: block;
    transform: translateY(-40%) rotateX(0deg);
    transition: transform 400ms ease;
  }

  .drawer-menu.up {
    display: block;
    transform: translateY(-87%) rotateX(90deg);
    transition: transform 400ms ease;
  }

  .icon {
    right: 0;
    position: relative;
    .drawer-icon {
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      transition: transform 400ms;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .line {
      fill: none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke: #fff;
      stroke-width: 5.5;
      stroke-linecap: round;
    }
    .drawer-icon-visible .top {
      stroke-dasharray: 40 172;
    }
    .drawer-icon-visible .middle {
      stroke-dasharray: 40 111;
    }
    .drawer-icon-visible .bottom {
      stroke-dasharray: 40 172;
    }
    .drawer-icon-visible.active .top {
      stroke-dashoffset: -132px;
    }
    .drawer-icon-visible.active .middle {
      stroke-dashoffset: -71px;
    }
    .drawer-icon-visible.active .bottom {
      stroke-dashoffset: -132px;
    }
  }
`;
