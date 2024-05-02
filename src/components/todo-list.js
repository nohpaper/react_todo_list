import {useState} from "react";

export default function TodoList(props){
  const [isClick, setIsClick] = useState(false);
  const [colorPicker, setColorPicker] = useState("none");
  const pickerColorFind = props.colorChart.find((color)=> color.name === colorPicker);

  return (
    <div className="w-[100%] h-[100vh] bg-[#FAFBFF]">
      <div className="rem:pt-[36px] rem:pb-[20px]">
        <div></div>
        <button className="rem:px-[31px] rem:py-[10px] rounded-30 rem:text-[20px] bg-white">4월 16일</button>
      </div>
      {/* main */}
      <div className="rem:w-[1730px] rem:h-[770px] relative m-auto rounded-30 overflow-hidden bg-white">
        <div className={`rem:w-[407px] h-[100%] absolute top-0 right-0 rounded-30 ${isClick ? "translate-x-0 shadow-[-4px_0_10px_rgba(0,0,0,.1)]" : "translate-x-[18.125rem]" } transition-all duration-700`}>
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
              <li className="rem:h-[45px] inline-block align-top rem:pl-[36px]">

                {props.colorChart.map((element, idx)=><SelectColorItem element={element} idx={idx} colorChart={props.colorChart} colorPicker={colorPicker} setColorPicker={setColorPicker}/>)}

              </li>
            </ul>
            <fieldset className={`rem:w-[333px] rem:pt-[15px] rem:px-[15px] rem:pb-[12px] m-auto rounded-20 box-border ${colorPicker === "none" ? null : pickerColorFind.chart.bg.default100}`}>
              <legend></legend>
              <div className={`relative text-left before:content-[''] rem:before:w-[16px] rem:before:h-[16px] before:absolute before:top-[50%] rem:before:left-[13px] rem:before:mt-[-8px] before:rounded-100% ${colorPicker === "none" ? null : pickerColorFind.chart.bg.before100}`}>
                <input type="text" placeholder="카테고리 이름 입력..." className="rem:w-[196px] rem:max-w-[305px] rem:py-[8px] rem:pr-[18px] rem:pl-[38px] rounded-30 overflow-hidden rem:text-[16px] rem:leading-[19px] placeholder-[#939393]"/>
              </div>
              <div className="rem:pt-[24px]">
                <input type="text" placeholder="내용 입력..." className={`rem:w-[305px] rem:px-[16px] rem:py-[6px] rounded-30 rem:text-[16px] rem:leading-[19px] rem:border-[1px] border-solid bg-transparent ${colorPicker === "none" ? null : pickerColorFind.chart.border.default300} ${colorPicker === "none" ? null : pickerColorFind.chart.placeholder.default300}`}/>
              </div>
              <div></div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export function SelectColorItem(props) {

  return <div className="color_select_wrap" key={props.idx}>
    <input type="radio" name="color_select" id={props.element.name} className="color_select_input" value={props.element.name} checked={props.colorPicker === props.element.name} onChange={(e)=>{props.setColorPicker(e.target.value);}} key={props.idx}/>
    <label htmlFor={props.element.name}
           className={`color_select_label ${ props.colorPicker === props.element.name ? props.element.chart.bg.before200 : props.element.chart.bg.before100} ${props.element.chart.bg.after100}`}>{props.element.name}</label>
  </div>
}