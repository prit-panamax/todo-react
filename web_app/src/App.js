import React, { useState, createContext } from 'react';
import Button from './Components/UI/Button';
import Card from './Components/UI/Card';
import Container from './Components/Display/Container'
import FormContainer from './Components/Form/FormContainer';
import './App.css';

export const myContext = createContext();

function App() {

  const [list, setList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  console.log('list', list);
  console.log('currentList', currentList);

  function filterList(date) {
    setFilterDate(date)
    const filteredList = list.filter((item) => item.date === date);
    setCurrentList(filteredList);
  }

  const deleteItem = (id) => {
    const newList = list.filter(task => task.id !== id);
    setList(newList);

    const newCurrentList = currentList.filter(task => task.id !== id);
    setCurrentList(newCurrentList);
  }

  function changeTask(id) {
    const newList = [];
    for (const item of list) {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      newList.push(item);
    }
    setList(newList);

    // const newCurrentList = [];
    // for (const item of currentList) {
    //   if (item.id === id) {
    //     item.completed = !item.completed;
    //   }
    //   newCurrentList.push(item);
    // }
    // setCurrentList(newCurrentList);
  }

  function removeFilter() {
    setCurrentList(list);
  }

  function formCallback(task) {
    setList([...list, task]);
    if (filterDate === "" || filterDate === task.date) {
      setCurrentList([...currentList, task]);
    }
  }
  function isUnique(taskAndDate) {
    // if (list.length)
    return !(list.find((item) => (item.task.replace(/\s/g, '').toLowerCase() + item.date) === taskAndDate));
    // return true;
  }
  return (<myContext.Provider value={{ currentList, deleteItem, changeTask, filterList, removeFilter }}>
    <FormContainer callback={formCallback} isUnique={isUnique}></FormContainer>
    <Container></Container>
  </myContext.Provider>
  );
}

export default App;
