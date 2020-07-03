import styled from 'styled-components';

export const Container = styled.form`

  display: flex;
  flex-direction: column;
  width: 50%;

  label {
    font-size: 24px;
    margin-bottom: 8px;
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

    &:hover {
      opacity: 0.85;
    }

  }

`

export const Logo = styled.div` 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;

  p {
    font-size: 32px;
    font-weight: bold;
  }
`;