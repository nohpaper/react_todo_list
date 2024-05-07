import './source/css/App.css';
import {Category, Bord, CheckList} from "./source/elements/memo";
import {useState} from "react";
import TodoList from "./components/todo-list";

function App() {
  /**TODO :
   * 1. colorPicker 재클릭 시 선택 해제
   *
   * */
  return (
    <div className="App">
      <TodoList/>
      <Bord isList={true}>
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
