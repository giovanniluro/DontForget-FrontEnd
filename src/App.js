import React, { useState } from 'react';
import { Container } from './style';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  const [user, setUser] = useState('');
  return (
    <>
      <Container>
        {user === '' && <Login setUser={setUser} />}
        {user !== '' && <Dashboard user={user} setUser={setUser} />}
      </Container>
    </>
  );
}

export default App;
