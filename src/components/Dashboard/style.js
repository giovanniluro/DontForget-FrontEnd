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

export const Content = styled.div` 
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  border-radius: 20px;
  align-items: center;
  position: relative;

  ul {
    margin-top: 20px;
    height: 300px;
    list-style: none;
    overflow: auto;

    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #355070;
      margin-bottom: 10px;
      width: 700px;
      font-size: 25px;

      button {
        background: transparent;
        border: 0;

        svg {
          color: #355070;
        }

        &:hover {
          svg {
            opacity: 0.8;
          }
        }

        &:focus {
          outline: 0;
        }

      }
    }
  }
 
`;

export const Buttons = styled.div`

  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;

  button {

    flex: 1;
    height: 60px;
    margin: 12px;
    background: #355070;
    color: white;
    font-size: 22px;
    border-radius: 20px;
    border: 0;
    transition: background .4s;

    &:hover {
      background: #304060;
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