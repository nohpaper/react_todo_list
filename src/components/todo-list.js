import {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function TodoList(props){
  const [isInputButton, setIsInputButton] = useState(false);
  const [colorPicker, setColorPicker] = useState("none");

  const inputField = useRef();

  const colorChart = useSelector((state) => state.chart);
  const pickerColorFind = colorChart.find((color)=> color.name === colorPicker);

  console.log(colorPicker);
  useEffect(() => {
    /*if(colorPicker !== "none"){
      return inputField.current.classList.add("input_field_on");
    }else if(!isInputButton){
      return inputField.current.classList.remove("input_field_on");
    }*/

    if(!isInputButton){
      return inputField.current.classList.remove("input_field_on");
    }else if(colorPicker !== "none"){
      return inputField.current.classList.add("input_field_on");
    }
  }, [isInputButton, colorPicker]);
  return (
    <div className="w-[100%] h-[100vh] bg-[#FAFBFF]">
      <div className="rem:pt-[36px] rem:pb-[20px]">
        <div></div>
        <button className="rem:px-[31px] rem:py-[10px] rounded-30 rem:text-[20px] bg-white">4월 16일</button>
      </div>
      {/* main */}
      <div className="rem:w-[1730px] rem:h-[770px] relative m-auto rounded-30 overflow-hidden bg-white">
        <div className={`rem:w-[407px] h-[100%] absolute top-0 right-0 rounded-30 ${isInputButton ? "translate-x-0 shadow-[-4px_0_10px_rgba(0,0,0,.1)]" : "translate-x-[18.125rem]" } transition-all duration-700`}>
          <form action="">
            <ul className="rem:pt-[36px] rem:pb-[30px] rem:pl-[36px] text-left">
              <li className="rem:w-[45px] rem:h-[45px] inline-block text-0">
                <button type="button" className={`
                w-[100%] h-[100%] relative rounded-100% bg-black ${isInputButton ? "rotate-[-315deg] " : "rotate-[0]" } transition-all duration-700
                before:content-[''] rem:before:w-[2px] rem:before:h-[20px] before:absolute before:top-[50%] before:left-[50%] rem:before:mt-[-10px] rem:before:ml-[-1px] before:bg-white
                after:content-[''] rem:after:w-[20px] rem:after:h-[2px] after:absolute after:top-[50%] after:left-[50%] rem:after:mt-[-1px] rem:after:ml-[-10px] after:bg-white
                `} onClick={()=>{
                  setIsInputButton((prev)=>!prev);
                }}></button>
              </li>
              <li className="rem:h-[45px] inline-block align-top rem:pl-[36px]">

                {colorChart.map((element, idx)=><SelectColorItem element={element} idx={idx} colorPicker={colorPicker} setColorPicker={setColorPicker} inputField={inputField}/>)}

              </li>
            </ul>
            {/*
              --창 열릴 시--
              1. isInputButton이 true,
              2. colorPicker 값이 none true 일 경우
              3. 카테고리 이름 input clean
              4. 내용 입력 input clean

              등장

              --취소 버튼 클릭 시--
              1. isInputButton이 true,
              2. colorPicker 값이 none false 일 경우
              3. 카테고리 이름 input clean
              4. 내용 입력 input clean

              퇴장

              --추가 버튼 클릭 시--
              1. isInputButton이 true,
              colorPicker 값이 none false 일 경우
              3. 카테고리 이름 input clean
              4. 내용 입력 input clean

              퇴장

              --창 닫힐 시--
              isInputButton이 false
              colorPicker 값이 none false 일 경우
              3. 카테고리 이름 input
              4. 내용 입력 input

              퇴장
            */}
            <fieldset
              className={`rem:w-[333px] m-auto translate-x-[23.0625rem] opacity-0 duration-500 ease-custom`}
              ref={inputField}>
              <legend className="text-[0px]">입력 필드</legend>
              <div className={`rem:pt-[15px] rem:px-[15px] rem:pb-[12px] rounded-20 box-border ${colorPicker === "none" ? "bg-gray-100" : pickerColorFind.chart.bg.default100} `}>
                <div
                  className={`relative text-left before:content-[''] rem:before:w-[16px] rem:before:h-[16px] before:absolute before:top-[50%] rem:before:left-[13px] rem:before:mt-[-8px] before:rounded-100% ${colorPicker === "none" ? "before:bg-gray-100" : pickerColorFind.chart.bg.before100}`}>
                  <input type="text" name="category" placeholder="카테고리 이름 입력..."
                         className="rem:w-[196px] rem:max-w-[305px] rem:py-[8px] rem:pr-[18px] rem:pl-[38px] rounded-30 overflow-hidden rem:text-[16px] rem:leading-[19px] placeholder-[#939393]"/>
                </div>
                <div className="rem:pt-[24px]">
                  <input type="text" name="contant" placeholder="내용 입력..."
                         className={`rem:w-[305px] rem:px-[16px] rem:py-[6px] rounded-30 rem:text-[16px] rem:leading-[19px] rem:border-[1px] border-solid bg-transparent ${colorPicker === "none" ? "border-gray-300" : pickerColorFind.chart.border.default300} ${colorPicker === "none" ? "placeholder-gray-300" : pickerColorFind.chart.placeholder.default300}`}/>
                </div>
                <div className="w-[100%] inline-block rem:pt-[12px] text-right">
                  <button type="reset"
                          className={`rem:px-[26px] rem:py-[6px] rounded-30 rem:text-[16px] rem:leading-[22px] box-border rem:border-[1px] border-solid ${colorPicker === "none" ? "border-gray-300" : pickerColorFind.chart.border.default300} ${colorPicker === "none" ? "text-gray-300" : pickerColorFind.chart.text.default300}`}>취소
                  </button>
                  <button type="submit"
                          className={`rem:ml-[5px] rem:px-[26px] rem:py-[6px] rounded-30 rem:text-[16px] rem:leading-[22px] text-white ${colorPicker === "none" ? "bg-gray-300" : pickerColorFind.chart.bg.default300}`}
                          onClick={(e) => {
                            e.preventDefault();
                          }}>추가
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export function SelectColorItem(props) {

  return <div className="color_select_wrap" key={props.idx}>
    <input type="radio" name="color_select" id={props.element.name} className="color_select_input" value={props.element.name} checked={props.colorPicker === props.element.name} onChange={(e)=>{props.setColorPicker(e.target.value); }} onClick={(e)=>{if(e.target.value === props.colorPicker){props.setColorPicker("none"); props.inputField.current.classList.remove("input_field_on");}}} key={props.idx}/>
    <label htmlFor={props.element.name}
           className={`color_select_label ${ props.colorPicker === props.element.name ? props.element.chart.bg.before200 : props.element.chart.bg.before100} ${props.element.chart.bg.after100}`}>{props.element.name}</label>
  </div>
}