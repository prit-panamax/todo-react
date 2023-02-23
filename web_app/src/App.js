import React, { useState, createContext } from 'react';
import Button from './Components/UI/Button';
import Card from './Components/UI/Card';
import Container from './Components/Display/Container'
import FormContainer from './Components/Form/FormContainer';
import './App.css';

export const myContext = createContext();

function App() {

  const [list, setList] = useState([])

  // console.log(list);
  const deleteItem = (id) =>{
    const newList = list.filter(task=>task.id !== id); 
    setList(newList);
  }

  function formCallback(task) {
    setList([...list, task]);
  }

  return (<myContext.Provider value={{list,deleteItem}}>
    <FormContainer callback={formCallback}></FormContainer>
    <Container></Container>
  </myContext.Provider>
  );
}

export default App;
