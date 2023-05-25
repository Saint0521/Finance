import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Form } from './components/Form';

const App = () => {
  const data = localStorage.getItem('transacao');
  const [listaTransacao, setListaTransacao] = useState(data ? JSON.parse(data) : []);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalSaidas = listaTransacao
      .filter((item) => item.saida)
      .map((transacao) => Number(transacao.entrada));
    const totalEntradas = listaTransacao
      .filter((item) => !item.saida)
      .map((transacao) => Number(transacao.entrada));
    const saida = totalSaidas.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const entrada = totalEntradas.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(entrada - saida).toFixed(2);
    setEntrada(`R$ ${entrada}`);
    setSaida(`R$ ${saida}`);
    setTotal(`${Number(entrada) < Number(saida) ? '-' : ''}R$ ${total}`);
  }, [listaTransacao]);

  const handleAdd = (transacao) => {
    const novoVetorTransacao = [...listaTransacao, transacao];
    setListaTransacao(novoVetorTransacao);
    localStorage.setItem('transacao', JSON.stringify(novoVetorTransacao));
  };

  return (
    <>
      <Header />
      <Resume entrada={entrada} saida={saida} total={total} />
      
      <Form 
        handleAdd={handleAdd}
        listaTransacao={listaTransacao}
        setListaTransacao={setListaTransacao}     
        />
        
      <GlobalStyle />
    </>
  );
};

export default App;