import styled from 'styled-components';
import { transparentize } from 'polished';

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background: linear-gradient(#00304b, #17425a);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

    img {
      max-width: 177px;
      max-height: 70px;
    }
    h4 {
      padding-bottom: 20px;
      color: #fff;
      font-size: 0.75rem;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 20px;
    a {
      text-decoration: none;
      font-weight: normal;
      color: ${transparentize(0.2, '#fff')};
      margin: 0 20px;
      text-transform: uppercase;

      &:hover {
        color: #fff;
      }
    }
  }

  .bosch-logo {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    max-width: 60px;
    max-height: 60px;
    margin-right: 20px;
  }

  @media (max-width: 1024px) {
    display: none !important;
  }
`;
