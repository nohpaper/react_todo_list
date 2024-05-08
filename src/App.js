import './source/css/App.css';

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
    </div>
  );
}

export default App;
