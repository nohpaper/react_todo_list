import './source/css/App.css';
import {Category, Bord, CheckList} from "./source/elements/memo";
import {useState} from "react";
import TodoList from "./components/todo-list";

function App() {
  /**TODO :
   *
   *
   * */
  const [ selectColor] = useState("yellow");
  const [ colorChart ] = useState([
    {
      name: "red",
      chart: {
        bg: {
          "default100": "bg-red-100", "before100": "before:bg-red-100", "after100": "after:bg-red-100",
          "default200": "bg-red-200", "before200": "before:bg-red-200", "after200": "after:bg-red-200",
        },
        text: {
          "default100": "text-red-100",
          "default300": "text-red-300",
          "default400": "text-red-400",
          "default500": "text-red-500",
        },
        border: {
          "default300": "border-red-300", "focus300": "focus:border-red-300",
        },
        placeholder: {
          "default300": "placeholder-red-300",
        },
      }
    },
    {
      name: "yellow",
      chart: {
        bg: {
          "default100": "bg-yellow-100", "before100": "before:bg-yellow-100", "after100": "after:bg-yellow-100",
          "default200": "bg-yellow-200", "before200": "before:bg-yellow-200", "after200": "after:bg-yellow-200",
        },
        text: {
          "default100": "text-yellow-100",
          "default300": "text-yellow-300",
          "default400": "text-yellow-400",
          "default500": "text-yellow-500",
        },
        border: {
          "default300": "border-yellow-300", "focus300": "focus:border-yellow-300",
        },
        placeholder: {
          "default300": "placeholder-yellow-300",
        },
      }
    },
    {
      name: "lightGreen",
      chart: {
        bg: {
          "default100": "bg-lightGreen-100", "before100": "before:bg-lightGreen-100", "after100": "after:bg-lightGreen-100",
          "default200": "bg-lightGreen-200", "before200": "before:bg-lightGreen-200", "after200": "after:bg-lightGreen-200",
        },
        text: {
          "default100": "text-lightGreen-100",
          "default300": "text-lightGreen-300",
          "default400": "text-lightGreen-400",
          "default500": "text-lightGreen-500",
        },
        border: {
          "default300": "border-lightGreen-300", "focus300": "focus:border-lightGreen-300",
        },
        placeholder: {
          "default300": "placeholder-lightGreen-300",
        },
      }
    },
    {
      name: "blue",
      chart: {
        bg: {
          "default100": "bg-blue-100", "before100": "before:bg-blue-100", "after100": "after:bg-blue-100",
          "default200": "bg-blue-200", "before200": "before:bg-blue-200", "after200": "after:bg-blue-200",
        },
        text: {
          "default100": "text-blue-100",
          "default300": "text-blue-300",
          "default400": "text-blue-400",
          "default500": "text-blue-500",
        },
        border: {
          "default300": "border-blue-300", "focus300": "focus:border-blue-300",
        },
        placeholder: {
          "default300": "placeholder-blue-300",
        },
      }
    },
    {
      name: "purple",
      chart: {
        bg: {
          "default100": "bg-purple-100", "before100": "before:bg-purple-100", "after100": "after:bg-purple-100",
          "default200": "bg-purple-200", "before200": "before:bg-purple-200", "after200": "after:bg-purple-200",
        },
        text: {
          "default100": "text-purple-100",
          "default300": "text-purple-300",
          "default400": "text-purple-400",
          "default500": "text-purple-500",
        },
        border: {
          "default300": "border-purple-300", "focus300": "focus:border-purple-300",
        },
        placeholder: {
          "default300": "placeholder-purple-300",
        },
      }
    },
    {
      name: "gray",
      chart: {
        bg: {
          "default100": "bg-gray-100", "before100": "before:bg-gray-100", "after100": "after:bg-gray-100",
          "default200": "bg-gray-200", "before200": "before:bg-gray-200", "after200": "after:bg-gray-200",
        },
        text: {
          "default100": "text-gray-100",
          "default300": "text-gray-300",
          "default400": "text-gray-400",
          "default500": "text-gray-500",
        },
        border: {
          "default300": "border-gray-300", "focus300": "focus:border-gray-300",
        },
        placeholder: {
          "default300": "placeholder-gray-300",
        },
      }
    },
    {
      name: "pink",
      chart: {
        bg: {
          "default100": "bg-pink-100", "before100": "before:bg-pink-100", "after100": "after:bg-pink-100",
          "default200": "bg-pink-200", "before200": "before:bg-pink-200", "after200": "after:bg-pink-200",
        },
        text: {
          "default100": "text-pink-100",
          "default300": "text-pink-300",
          "default400": "text-pink-400",
          "default500": "text-pink-500",
        },
        border: {
          "default300": "border-pink-300", "focus300": "focus:border-pink-300",
        },
        placeholder: {
          "default300": "placeholder-pink-300",
        },
      }
    },
  ])
  return (
    <div className="App">
      <TodoList colorChart={colorChart}/>
      <Bord isList={true} bgColor={selectColor} colorChart={colorChart}>
        <Category value="^^" bgColor={selectColor} colorChart={colorChart}/>
        <div className="rem:pt-[10px]">
          <CheckList listNum={"1"} bgColor={selectColor} colorChart={colorChart}></CheckList>
          <CheckList listNum={"2"} bgColor={selectColor} colorChart={colorChart}></CheckList>
          <CheckList listNum={"3"} bgColor={selectColor} colorChart={colorChart}></CheckList>
          <CheckList listNum={"4"} bgColor={selectColor} colorChart={colorChart}></CheckList>
        </div>
      </Bord>
    </div>
  );
}

export default App;
