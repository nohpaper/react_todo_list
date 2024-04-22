import classNames from "classnames";
import {useState} from "react";

export function Bord(props) {
  const bgColor = (color) => {
    switch(color){
      case "red": {
        return "bg-red-100"
      }
      case "yellow": {
        return "bg-yellow-100"
      }
      case "lightGreen": {
        return "bg-lightGreen-100"
      }
      case "blue": {
        return "bg-blue-100"
      }
      case "purple": {
        return "bg-purple-100"
      }
      case "pink": {
        return "bg-pink-100"
      }
      default:
      case "gray": {
        return "bg-gray-100"
      }
    }
  }

  return (
    <div className={`${props.isList ? "rem:w-[350px]" : "w-[100%]"} rem:min-h-[250px] rem:pt-[13px] rem:pr-[25px] rem:pb-[25px] rem:pl-[15px] box-border rounded-20 ${bgColor(props.bgColor)}`}>{ props.children }</div>
  )
}

export function Category(props){
  const bgColor = (color) => {
    switch(color){
      case "red": {
        return "before:bg-red-100"
      }
      case "yellow": {
        return "before:bg-yellow-100"
      }
      case "lightGreen": {
        return "before:bg-lightGreen-100"
      }
      case "blue": {
        return "before:bg-blue-100"
      }
      case "purple": {
        return "before:bg-purple-100"
      }
      case "pink": {
        return "before:bg-pink-100"
      }
      default:
      case "gray": {
        return "before:bg-gray-100"
      }
    }
  }

  return (
    /*<input type="text" name="category" className={classNames("rounded-20 py-[6px] pr-[16px] pl-[35px]", {
      active : isAction
    })}/>*/
    <div className={`
      w-[min-content] relative
      before:content-[""] rem:before:w-[16px] rem:before:h-[16px] before:absolute rem:before:left-[13px] before:top-[50%] rem:before:mt-[-8px] before:rounded-100% ${bgColor(props.bgColor)}
    `}>
      <input type="text" name="category" className="w-[100%] rem:py-[6px] rem:pr-[16px] rem:pl-[35px] rounded-20"/>
    </div>
  )
}

export function CheckButton(props){
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <div className="rem:w-[16px] rem:h-[16px] inline-block relative align-top">
      <input type="checkbox" id={`listCheck${props.listNum}`} className="absolute top-[0] left-[0] opacity-[0] z-[-1]"
             onChange={() => {setIsChecked((prev) => !prev)}}/>
      <label htmlFor={`listCheck${props.listNum}`} className={`
        text-[0] cursor-pointer
        before:content-[''] before:w-[100%] before:h-[100%] before:absolute before:top-[50%] before:left-[0] rem:before:mt-[-4px] before:rounded-100% 
        ${isChecked ? "before:bg-red-200" : "before:bg-white"}
        after:content-[''] rem:after:w-[8px] rem:after:h-[8px] after:absolute after:top-[50%] after:left-[50%]  rem:after:ml-[-4px] after:rounded-100% after:bg-white
      `}
      >{isChecked}</label>
    </div>
  )
}

export function MoreButton(props) {
  const bgColor = (color) => {
    switch (color) {
      case "red": {
        return "bg-red-200"
      }
      case "yellow": {
        return "bg-yellow-200"
      }
      case "lightGreen": {
        return "bg-lightGreen-200"
      }
      case "blue": {
        return "bg-blue-200"
      }
      case "purple": {
        return "bg-purple-200"
      }
      case "pink": {
        return "bg-pink-200"
      }
      default:
      case "gray": {
        return "bg-gray-200"
      }
    }
  }
  const [ isMore, setIsMore ] = useState(false);
  console.log(isMore);
  return (
    <div className="rem:w-[36px] h-[100%] inline-block align-top relative text-[0px] ">
      <button type="button" className={`
      rem:w-[19px] h-[100%] absolute right-[0px]
      ${ isMore ? "opacity-0" : "opacity-100"}
      `}
        onClick={()=>{setIsMore((prev)=> !prev)}}
      >더보기
        <span className={`
          rem:w-[5px] rem:h-[5px] block absolute left-[50%] top-[50%] rem:mt-[-2.5px] rem:ml-[-2.5px] rounded-100% ${bgColor(props.bgColor)}
          before:content-[""] rem:before:w-[5px] rem:before:h-[5px] before:absolute before:top-[0] rem:before:left-[-7px] before:rounded-100% before:bg-red-200
          after:content-[""] rem:after:w-[5px] rem:after:h-[5px] after:absolute after:top-[0] rem:after:left-[7px] after:rounded-100% after:bg-red-200
        `}/>
      </button>
      <div className={`
        rem:h-[16px] absolute top-[50%] right-[0] rem:mt-[-9px] transition-all origin-right
        ${ isMore ? "scale-100" : "scale-0 opacity-0"}
        `}>
        <button type="button" className="rem:w-[16px] h-[100%] rounded-100% bg-white">중요</button>
        <button type="button" className="
          rem:w-[16px] h-[100%] relative rem:ml-[4px] rounded-100% bg-red-200
          before:content-[''] rem:before:w-[10px] rem:before:h-[2px] before:absolute before:top-[50%] before:left-[50%] rem:before:mt-[-1px] rem:before:ml-[-5px] before:bg-white
        ">제거</button>
      </div>
    </div>
  )
}

export function CheckList(props){
  return (
    <div className="rem:h-[40px] rem:pt-[18px] text-left">
      <CheckButton listNum={props.listNum}></CheckButton>
      <input type="text" className="rem:w-[232px] rem:h-[22px] align-top rem:pl-[16px] rem:pr-[10px] rem:text-[16px] box-content"/>
      <MoreButton></MoreButton>
    </div>
  )
}