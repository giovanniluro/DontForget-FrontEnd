import React, { useState, useCallback } from 'react';
import { Container, Header, Content, Buttons } from './style';
import { FiUser, FiLogOut, FiTrash } from 'react-icons/fi';

const Dashboard = ({ user, setUser }) => {

  const [itens, setItens] = useState([
    {
      id: 1,
      nome: 'Cebola',
      quantidade: 4
    },
    {
      id: 2,
      nome: 'Pão',
      quantidade: 1
    },
    {
      id: 3,
      nome: 'Refrigerante',
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Doritos',
      quantidade: 12
    }
  ]);

  const handleItemDelete = useCallback(id => {
    setItens(itens.filter(item => item.id !== id));
  }, [itens]);

  return (
    <Container>
      <Header>
        <div>
          <FiUser size={70} color="#355070" />
          <span> Seja bem-vindo(a), <strong>{user}</strong>! </span>
        </div>
        <button onClick={() => setUser('')}><FiLogOut size={46} /></button>
      </Header>
      <Content>
        <ul>
          {itens.map(item => (
            <li key={item.id}>
              {item.nome} x {item.quantidade}
              <button onClick={() => handleItemDelete(item.id)}><FiTrash size={28}/></button>
            </li>
          ))}
        </ul>
        <Buttons>
          <button> Adicionar novo produto +</button>
          <button className="del"> Deletar Lista</button>
        </Buttons>
      </Content>
    </Container>
  )
}

export default Dashboard;