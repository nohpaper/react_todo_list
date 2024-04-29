import {useState} from "react";

export default function TodoList(props){
  const [isClick, setIsClick] = useState(false);
  console.log(isClick);
  return (
    <div className="w-[100%] h-[100vh] bg-[#FAFBFF]">
      <div className="rem:pt-[36px] rem:pb-[20px]">
        <div></div>
        <button className="rem:px-[31px] rem:py-[10px] rounded-30 rem:text-[20px] bg-white">4월 16일</button>
      </div>
      {/* main */}
      <div className="rem:w-[1730px] rem:h-[770px] relative m-auto rounded-30 overflow-hidden bg-white">
        <div className={`rem:w-[407px] h-[100%] absolute top-0 right-0 rounded-30 ${isClick ? "translate-x-0 shadow-[-4px_0_10px_rgba(0,0,0,.1)]" : "translate-x-[18.125rem]" } transition-all duration-700 bg-red-100`}>
          <form action="">
            <ul className="rem:pt-[36px] rem:pb-[30px] rem:pl-[36px] text-left">
              <li className="rem:w-[45px] rem:h-[45px] inline-block text-0">
                <button type="button" className={`
                w-[100%] h-[100%] relative rounded-100% bg-black ${isClick ? "rotate-[-315deg] " : "rotate-[0]" } transition-all duration-700
                before:content-[''] rem:before:w-[2px] rem:before:h-[20px] before:absolute before:top-[50%] before:left-[50%] rem:before:mt-[-10px] rem:before:ml-[-1px] before:bg-white
                after:content-[''] rem:after:w-[20px] rem:after:h-[2px] after:absolute after:top-[50%] after:left-[50%] rem:after:mt-[-1px] rem:after:ml-[-10px] after:bg-white
                `} onClick={()=>{
                  setIsClick((prev)=>!prev);
                }}></button>
              </li>
              <li className="inline-block">

                {props.colorChart.map((element)=><SelectColorItem element={element}/>)}

              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export function SelectColorItem(props) {
  const [isColorSelect, setIsColorSelect] = useState(false);

  return <div className="color_select_wrap">
    <input type="radio" name="color_select" id={props.element.name} className=""/>
    <label htmlFor={props.element.name}
           className={`color_select_label ${isColorSelect ? props.element.chart.bg.before200 : props.element.chart.bg.before100} ${props.element.chart.bg.after100}`}>{props.element.name}</label>
  </div>
}