import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  z-index: 2000;
  position: absolute;

  div {
    background: white;
    padding: 42px 54px;
    border-radius: 20px;
    position: relative;

    > button {
        height: 50px;
        width: 50px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        color: white;
        background: #355070;
        position: absolute;
        border-radius: 50%;
        top: -10px;
        left: -10px;
        transition: background .4s;

        &:focus {
          outline: 0;
        }

        &:hover {
          background: #304060;
        }
      }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 32px;
        margin-bottom: 32px;
      }

      input {
        border: 0;
        height: 30px; 
        padding: 12px 4px;
        font-size: 18px;
        border-bottom: 3px solid #355070;
        margin-bottom: 16px;

        &:focus {
          outline: 0;
        }
      }

      button {
        margin-top: 15px;
        height: 52px;
        background: #355070;
        font-size: 26px;
        color: white;
        transition: opacity .5s;
        border: 0;
        border-radius: 20px;
        padding: 12px;

        &:hover {
          opacity: 0.85;
        }

        &:focus {
          outline: 0;
        }
      }
    }
  }
`;