import logo from './logo.svg';
import './source/css/App.css';
import {Category, Bord, CheckList} from "./source/elements/memo";

function App() {
  return (
    <div className="App">
      <Bord bgColor={"red"} isList={true}>
        <Category value="^^"/>
        <CheckList></CheckList>
      </Bord>
    </div>
  );
}

export default App;
