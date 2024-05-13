import './source/css/App.css';

import {useState} from "react";
import TodoList from "./components/todo-list";

function App() {
  /**TODO :
   * 1. category 중복 관련
   * 2. field input
   * 3. field button click 시
   *    3-1. category / color picker 여부에 따라 color 및 category 확인
   *    3-2. categoryName 입력 안되어있으면 보류 / 입력되어있으면 넘기기
   * 4. listStatus -> data.list.todo change
   * */
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
