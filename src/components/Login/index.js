import React, { useState } from 'react';
import { Container, Logo } from './style';
import { FiBox } from 'react-icons/fi';

const Login = ({ setUser }) => {

  const [input, setInput] = useState('');

  return (
    <Container>
      <Logo>
        <FiBox size={60} color="#355070" />
        <p> Don't Forget </p>
      </Logo>
      <label>Entre com o seu nome:</label>
      <input type="text" onChange={e => setInput(e.target.value)} value={input} />
      <button onClick={() => { if (input !== '') setUser(input) }}> Entrar </button>
    </Container>
  );

}

export default Login;