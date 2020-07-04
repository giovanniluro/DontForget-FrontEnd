import React from 'react';
import { Container, Buttons } from './style';

const ConfirmDelete = ({ setShowConfirmDelete, setItens }) => {

  return (
    <Container>
      <div>
        <p>Deseja realmente limpar a sua lista de compras?</p>
        <Buttons>
          <button onClick={
            (e) => {
              e.preventDefault();
              setItens([]);
              setShowConfirmDelete(false);
            }
          }>Sim</button>
          <button onClick={
            (e) => {
              e.preventDefault();
              setShowConfirmDelete(false);
            }
          }class="del">Não</button>
        </Buttons>
      </div>
    </Container>
  )

};

export default ConfirmDelete;