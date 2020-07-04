import styled from 'styled-components';

export const Container = styled.div`

  top: 0;
  left: 0;
  background: rgba(0,0,0,0.3);
  position: absolute;
  z-index: 2000;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  > div{

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    padding: 24px 32px;
    border-radius: 20px;
    display: flex;


    p {
      margin-top: 30px;
      font-size: 32px;
    }
  }

`;

export const Buttons = styled.div`

  display: flex;

  button {
    height: 70px;
    width: 150px;
    border: 0;
    margin: 25px;
    border-radius: 20px;
    background: #95a78d; 
    font-size: 20px;
    transition: background .4s;
    color: white;

    &:hover {
      background: #4e5c47;
    }

    &:focus {
      outline: 0;
    }
  }

  button[class="del"] {

    background: #E56B6F;

    &:hover {
      background: #f6523c;
    }


  }

`;