import './App.css';
import Input from './input';
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState({
    name: 'Usuario'
  });

  return (
    <Input nombre={nombre} setNombre={setNombre} />
  );
}

export default App;
