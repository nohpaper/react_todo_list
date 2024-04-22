import logo from './logo.svg';
import './source/css/App.css';
import {Category, Bord, CheckList} from "./source/elements/memo";
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Bord bgColor={"red"} isList={true}>
        <Category value="^^"/>
        <div className="rem:pt-[10px]">
          <CheckList listNum={"1"}></CheckList>
          <CheckList listNum={"2"}></CheckList>
          <CheckList listNum={"3"}></CheckList>
          <CheckList listNum={"4"}></CheckList>
        </div>
      </Bord>
    </div>
  );
}

export default App;
