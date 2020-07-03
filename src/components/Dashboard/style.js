import styled from 'styled-components';

export const Container = styled.div`
  min-height: 550px;
  min-width: 750px;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cccccc;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;

  div {
    
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
      font-size: 28px;
    }
  }

  button {
    background: transparent;
    border: 0;
    border-radius: 20px;
    transition: background .4s ease;
    padding: 10px;

    svg {
      color: #355070;
      transition: color .4s ease;
    }

    &:focus {
      outline: 0;
    }

    &:hover {
      transform: scale(1.1);
      background: #355070;
      svg {
        color: white;
      }
    }
  }
`
export const Content = styled.div ` 
  flex: 1;
  border: 1px solid #cccccc;
  border-radius: 20px;
 
`;