import React, { useCallback, useState } from 'react';
import { Container } from './style';
import { FiXCircle } from 'react-icons/fi';

const NewProduct = ({ setShowAddProduct, setItens, itens }) => {

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    if (nome !== '' && quantidade !== '') {
      let id;
      itens.length > 0 ? id = Number(itens[itens.length - 1].id) + 1: id = 0;
      setItens([...itens, { id, nome, quantidade }]);
    }
    setShowAddProduct(false);
  }, [nome, quantidade, itens, setItens, setShowAddProduct]);

  return (
    <Container>
      <div>
        <button onClick={() => setShowAddProduct(false)}> <FiXCircle size={28} color="white"/> </button>
        <form onSubmit={handleSubmit}>
          <p>Adicionar novo item</p>
          <input autofocus type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Descrição" />
          <input type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)} placeholder="Quantidade"/>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </Container>
  )

}

export default NewProduct;