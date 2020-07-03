import React from 'react';
import { Container, Header, Content } from './style';
import { FiUser, FiLogOut } from 'react-icons/fi';

const Dashboard = ({user, setUser}) => {
  return (
    <Container>
      <Header>
        <div>
        <FiUser size={70} color="#355070"/> 
        <span> Seja bem-vindo(a), {user}! </span>
        </div>
        <button onClick={() => setUser('')}><FiLogOut size={46} /></button>
      </Header>
      <Content>

      </Content>
    </Container>
  )
}

export default Dashboard;