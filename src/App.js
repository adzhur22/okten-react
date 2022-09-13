// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів


import './App.css';
import Family from "./components/task 1/family/family";
import User from "./components/task 2/person task 2/person task 2";


function App() {

  return (
    <div className='conteiner'>
        <Family/>
        <User id={1}/>
        <User id={2}/>
        <User id={3}/>
        <User id={4}/>
        <User id={5}/>
        <User id={6}/>

    </div>
  );
}

export default App;
