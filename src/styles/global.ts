import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'Bosch';
    src: url('../assets/fonts/BoschSans-Regular.otf');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth !important;
    ::-webkit-scrollbar-track {
	    background-color: #ccc;
      position: absolute;
    }
    ::-webkit-scrollbar {
      width: 6px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #00304b;
    }

  }
  body {

    background: #fff;
    -webkit-font-smoothing: antialiased;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
	    background-color: #ccc;
      position: absolute;
    }
    ::-webkit-scrollbar {
      width: 6px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #00304b;
    }

  }

  body, input, button {
    font: 1rem Bosch, sans-serif;

  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: hidden;

  }

  button {
    cursor: pointer;
  }

  .flex-horizontal {
  display: flex;
  flex-direction: row;
}

.flex-vertical {
  display: flex;
  flex-direction: column;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: end;
}

.justify-between {
  justify-content: space-between;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-around {
  justify-content: space-around;
}

.section-title {
  font-size: 4rem;
  font-weight: bold;
}

.font-bold {
  font-weight: bold;
}

`;
