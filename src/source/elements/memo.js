import classNames from "classnames";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import { useSelector } from 'react-redux';

export function Bord(props) {
  const selectColor = useSelector((state) => state.color.value);
  const colorChart = useSelector((state) => state.chart);
  const chooseColor = colorChart.find((color)=> color.name === selectColor);

  return (
    <div className={`${props.isList ? "rem:w-[350px]" : "w-[100%]"} rem:min-h-[250px] rem:pt-[13px] rem:pr-[25px] rem:pb-[25px] rem:pl-[15px] box-border rounded-20 ${chooseColor.chart.bg.default100}`}>{ props.children }</div>
  )
}

export function Category(props){
  const selectColor = useSelector((state) => state.color.value);
  const colorChart = useSelector((state) => state.chart);
  const chooseColor = colorChart.find((color)=> color.name === selectColor);

  return (
    /*<input type="text" name="category" className={classNames("rounded-20 py-[6px] pr-[16px] pl-[35px]", {
      active : isAction
    })}/>*/
    <div className={`
      w-[min-content] relative
      before:content-[""] rem:before:w-[16px] rem:before:h-[16px] before:absolute rem:before:left-[13px] before:top-[50%] rem:before:mt-[-8px] before:rounded-100% ${chooseColor.chart.bg.before100}
    `}>
      <input type="text" name="category" className="w-[100%] rem:py-[6px] rem:pr-[16px] rem:pl-[35px] rounded-20"/>
    </div>
  )
}

export function CheckButton(props){
  const selectColor = useSelector((state) => state.color.value);
  const colorChart = useSelector((state) => state.chart);
  const chooseColor = colorChart.find((color)=> color.name === selectColor);


  return (
    <div className="rem:w-[16px] rem:h-[16px] inline-block relative align-top">
      <input type="checkbox" id={`listCheck${props.listNum}`} className="absolute top-[0] left-[0] opacity-[0] z-[-1]"
             onChange={() => {
               let copy = [...props.listStatus];
               copy[0].isDone = !props.listStatus[0].isDone;
               props.setListStatus(copy)
             }}/>
      <label htmlFor={`listCheck${props.listNum}`} className={`
        text-[0] cursor-pointer
        before:content-[''] before:w-[100%] before:h-[100%] before:absolute before:top-[50%] before:left-[0] rem:before:mt-[-4px] before:rounded-100% 
       
        ${props.listStatus[0].isDone ? chooseColor.chart.bg.before200 : "before:bg-white"}
        
        after:content-[''] rem:after:w-[8px] rem:after:h-[8px] after:absolute after:top-[50%] after:left-[50%]  rem:after:ml-[-4px] after:rounded-100% after:bg-white
      `}
      >{props.listStatus[0].isDone}</label>
    </div>
  )
}

export function MoreButton(props) {
  const selectColor = useSelector((state) => state.color.value);
  const colorChart = useSelector((state) => state.chart);
  const chooseColor = colorChart.find((color)=> color.name === selectColor);

  const [isMore, setIsMore] = useState(false);

  return (
    <div className="rem:w-[36px] h-[100%] inline-block align-top relative text-[0px] ">
      <button type="button" className={`
      rem:w-[19px] h-[100%] absolute right-[0px]
      ${isMore ? "opacity-0" : "opacity-100"}
      `}
              onClick={() => {
                setIsMore((prev) => !prev)
              }}
      >더보기
        <span className={`
          rem:w-[5px] rem:h-[5px] block absolute left-[50%] top-[50%] rem:mt-[-2.5px] rem:ml-[-2.5px] rounded-100% ${chooseColor.chart.bg.default200}
          before:content-[""] rem:before:w-[5px] rem:before:h-[5px] before:absolute before:top-[0] rem:before:left-[-7px] before:rounded-100% ${chooseColor.chart.bg.before200}
          after:content-[""] rem:after:w-[5px] rem:after:h-[5px] after:absolute after:top-[0] rem:after:left-[7px] after:rounded-100% ${chooseColor.chart.bg.after200}
        `}/>
      </button>
      <div className={`
        rem:h-[16px] absolute top-[50%] right-[0] rem:mt-[-9px] transition-all origin-right
        ${isMore ? "scale-100" : "scale-0 opacity-0"}
        `}
           onClick={() => {
             setIsMore(false)
           }}
      >
        <button type="button"
                className={`rem:w-[16px] h-[100%] relative rounded-100% ${props.listStatus[0].isImportant ? chooseColor.chart.bg.default200 : "bg-white"}`}
                onClick={() => {
                  let copy = [...props.listStatus];
                  copy[0].isImportant = !props.listStatus[0].isImportant;
          props.setListStatus(copy)
        }}>
          중요
          <FaHeart
            className={`rem:w-[12px] rem:h-[12px] absolute top-[50%] left-[50%] rem:mt-[-5.5px] rem:ml-[-6px] ${props.listStatus[0].isImportant ? chooseColor.chart.text.default300 : chooseColor.chart.text.default100} `}/>
        </button>
        <button type="button" className={`
          rem:w-[16px] h-[100%] relative rem:ml-[4px] rounded-100% ${chooseColor.chart.bg.default200}
          before:content-[''] rem:before:w-[10px] rem:before:h-[2px] before:absolute before:top-[50%] before:left-[50%] rem:before:mt-[-1px] rem:before:ml-[-5px] before:bg-white
        `}>제거
        </button>
      </div>
    </div>
  )
}

export function CheckList(props) {
  const [listStatus, setListStatus] = useState([
    {isDone: false, isImportant: false,}
  ]);
  const selectColor = useSelector((state) => state.color.value);
  const colorChart = useSelector((state) => state.chart);
  const chooseColor = colorChart.find((color)=> color.name === selectColor);
  const isActiveCss = (isDone, isImportant) => {
    if (isDone && isImportant) {
      return `${chooseColor.chart.text.default400} line-through font-bold`
    } else if(isImportant){
      return `${chooseColor.chart.text.default500} font-bold`
    } else if(isDone){
      return `${chooseColor.chart.text.default400} line-through`
    } else {
      return `${chooseColor.chart.text.default500}`
    }
  }

  return (
    <div className="rem:h-[40px] rem:pt-[18px] text-left">
      <CheckButton listNum={props.listNum} listStatus={listStatus}
                   setListStatus={setListStatus}></CheckButton>
      <input type="text" disabled={listStatus[0].isDone} className={`
        rem:w-[232px] rem:h-[22px] align-top rem:pl-[16px] rem:pr-[10px] rem:text-[16px] box-content bg-transparent
        focus:outline-0 rem:focus:border-b-[1px] focus:border-dashed ${chooseColor.chart.border.focus300}
        ${isActiveCss(listStatus[0].isDone, listStatus[0].isImportant)}
      `}
      />
      <MoreButton listStatus={listStatus} setListStatus={setListStatus}></MoreButton>
    </div>
  )
}