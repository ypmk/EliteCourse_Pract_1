import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyName from "./components/myName";
import LetIndex from "./components/letIndex";
import StateIndex from "./components/stateIndex";
import MyAge from "./components/myAge";
import ElementList from "./components/ElementList";

function App() {
  const [count, setCount] = useState(0);
  const names = [{name:'Ksenia'}, {name:'Sveta'}, {name:'Sasha'}];
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);


  type typeArrayUsers = {
      name:string;
      age:number;
  }[]


  const arrayUsers: typeArrayUsers = [{
      name:"Alice",
      age:25
  },{
      name:"Sasha",
      age:15
  },{
      name:"Masha",
      age:27
  }];


  return (
    <>
      <div>



          <hr/>

          {arrayUsers.map((elem, index) =>(
              <li key={index}>
                  {elem.name} - Возраст:{elem.age}
              </li>
          ))}

          <hr/>


          <ElementList name={'Lesha'} isPacked={true}/>
          <ElementList name={'Alice'} isPacked={true}/>
          <ElementList name={'Sasha'} isPacked={false}/>

          <hr/>


          <MyName name={names[0].name}>
              <MyAge age={45}/>
          </MyName>
          <MyName name={names[1].name}>
              <MyAge age={35}/>
          </MyName>
          <MyName name={names[2].name}>
              {null}
          </MyName>

          <hr/>

          <LetIndex/>

          <hr/>


          <StateIndex index={index1} setIndex={setIndex1}></StateIndex>
          <StateIndex index={index2} setIndex={setIndex2}></StateIndex>

          <hr/>


        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
