import {useEffect, useRef, useState} from "react";
import {Category, Bord, CheckList} from "../source/elements/memo";
import { useSelector, useDispatch } from 'react-redux';
import {colorChart} from "../source/store/common";


export default function TodoList(props){
  const [isInputButton, setIsInputButton] = useState(false);
  const [colorPicker, setColorPicker] = useState("none");
  const [categoryName, setCategoryName] = useState("");
  const [fieldContent, setFieldContent] = useState("");

  //category
  const [showCount, setShowCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  const inputField = useRef();
  const pickerColorFind = colorChart.find((color)=> color.name === colorPicker);

  const [data, setData] = useState({
    id : "20240508", //입력하면 넘어오는 정보
    list : [
      {
        color : "blue", //입력하면 넘어오는 정보
        category : "할일", //입력하면 넘어오는 정보
        isShow : true,
        isActive : false,
        todo : [
          {
            number : 0,
            content : "3시간 공부하기", //입력하면 넘어오는 정보
            isShow : true,
            isDone : false,
            isImportant : false,
          },
        ]
      },
      {
        color : "red",
        category : "예약",
        isShow : true,
        isActive : false,
        todo : [
          {
            number : 0,
            content : "KTX 예약",
            isShow : true,
            isDone : false,
            isImportant : false,
          },
          {
            number : 1,
            content : "숙소 예약하기",
            isShow : true,
            isDone : false,
            isImportant : false,
          },
        ]
      }
    ]
  })
  console.log(data);
  useEffect(() => {
    if(!isInputButton){
      //false
      inputField.current.classList.remove("field_on");
    }else{
      //true
      if(colorPicker !== "none" || activeCount >= 1){
        //active
        inputField.current.classList.add("field_on");
      }else {
        //none active
        inputField.current.classList.remove("field_on");
      }

    }
  }, [isInputButton, colorPicker, activeCount]);

  useEffect(()=>{
    setShowCount(data.list.filter(item => item.isShow).length)
    setActiveCount(data.list.filter(item => item.isActive).length)
    //console.log("Number of items where 'show' is true:", showCount);

  }, [data])

  return (
    <div className="w-[100%] h-[100vh] bg-[#FAFBFF]">
      <div className="rem:w-[1730px] m-auto rem:pt-[36px] rem:pb-[20px] relative">
        <button className="rem:px-[31px] rem:py-[10px] absolute rem:top-[36px] left-0 rounded-30 rem:text-[20px] bg-white">4월 15일</button>
        <button className="rem:px-[31px] rem:py-[10px] block m-auto rounded-30 rem:text-[20px] bg-white">4월 16일</button>
      </div>
      {/* main */}
      <div className="rem:w-[1730px] rem:h-[770px] relative m-auto rounded-30 overflow-hidden bg-white">
        <div className="w-[100%] h-[100%] rem:pl-[66px] rem:pr-[117px] rem:py-[46px]">
          <form action="">
            {data.list.map(function(element, idx){
              const dataColor = element.color;
              const listIdx = idx;

              return <Bord isList={true} color={dataColor}>
                <Category category={element.category} color={dataColor}/>
                <div className="rem:pt-[10px]">
                  {element.todo.map(function(element, idx){
                    return <CheckList todoIdx={idx} listIdx={listIdx} color={dataColor} content={element.content} isShow={element.isShow} isDone={element.isDone} isImportant={element.isImportant}/>
                  })}
                </div>
              </Bord>
            })}

          </form>
        </div>
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
                {colorChart.map((element, idx)=><SelectColorItem element={element} idx={idx} data={data} setData={setData} colorPicker={colorPicker} setColorPicker={setColorPicker} inputField={inputField}/>)}
              </li>
            </ul>
            {showCount === 0 ? null :
              <div className={`rem:w-[333px] m-auto rem:mb-[20px] duration-500 ease-custom ${isInputButton ? "field_on" : "translate-x-[23.0625rem] opacity-0 "}`}>
                {data.list.map((element, idx) => <MadeCategory element={element} idx={idx} data={data} setData={setData} colorPicker={colorPicker} setColorPicker={setColorPicker} activeCount={activeCount}/>)}
              </div>
            }
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
                  <input type="text" name="category" placeholder="카테고리 이름 입력..." //value={}
                         className="rem:w-[196px] rem:max-w-[305px] rem:py-[8px] rem:pr-[18px] rem:pl-[38px] rounded-30 overflow-hidden rem:text-[16px] rem:leading-[19px] placeholder-[#939393]"
                         onChange={(e)=>{
                           if(colorPicker !== "none" && activeCount === 0){
                             setCategoryName(e.target.value);
                           }
                         }}
                  />
                </div>
                <div className="rem:pt-[24px]">
                  <input type="text" name="contant" placeholder="내용 입력..."
                         className={`rem:w-[305px] rem:px-[16px] rem:py-[6px] rounded-30 rem:text-[16px] rem:leading-[19px] rem:border-[1px] border-solid bg-transparent ${colorPicker === "none" ? "border-gray-300" : pickerColorFind.chart.border.default300} ${colorPicker === "none" ? "placeholder-gray-300" : pickerColorFind.chart.placeholder.default300}`}
                         onChange={(e)=>{
                           setFieldContent(e.target.value);
                           console.log(fieldContent);
                         }}
                  />
                </div>
                <div className="w-[100%] inline-block rem:pt-[12px] text-right">
                  <button type="reset"
                          className={`rem:px-[26px] rem:py-[6px] rounded-30 rem:text-[16px] rem:leading-[22px] box-border rem:border-[1px] border-solid ${colorPicker === "none" ? "border-gray-300" : pickerColorFind.chart.border.default300} ${colorPicker === "none" ? "text-gray-300" : pickerColorFind.chart.text.default300}`}>취소
                  </button>
                  <button type="submit"
                          className={`rem:ml-[5px] rem:px-[26px] rem:py-[6px] rounded-30 rem:text-[16px] rem:leading-[22px] text-white ${colorPicker === "none" ? "bg-gray-300" : pickerColorFind.chart.bg.default300}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const addContent = {
                              color : colorPicker,
                              category: categoryName,
                              isShow : true,
                              isActive : false,
                              todo : [
                                {
                                  number : 0,
                                  content : fieldContent, //입력하면 넘어오는 정보
                                  isShow : true,
                                  isImportant : false,
                                },
                              ]
                            }

                            setData((prev)=>({...prev, list:[...prev.list, addContent]}))
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
    <input type="radio" name="color_select" id={props.element.name} className="color_select_input" value={props.element.name} checked={props.colorPicker === props.element.name} onChange={(e)=>{props.setColorPicker(e.target.value); }}
           onClick={(e)=>{
             //reclick시 input radio value false
             if(e.target.value === props.colorPicker){
               props.setColorPicker("none");
               props.inputField.current.classList.remove("input_field_on");
             }

             //click시 props.data.list.active value all false
             const update = props.data.list.map(function(element){
               return {
                 ...element,
                 isActive : false
               }
             })
             props.setData({...props.data, list:update});
           }} key={props.idx}/>
    <label htmlFor={props.element.name}
           className={`color_select_label ${ props.colorPicker === props.element.name ? props.element.chart.bg.before200 : props.element.chart.bg.before100} ${props.element.chart.bg.after100}`}>{props.element.name}</label>
  </div>
}

export function MadeCategory(props) {
  const [ isActive, setIsActive ] = useState(false); //click active boolean
  const [ isShow, setIsShow ] = useState(props.data.list[props.idx].isShow); //category show boolean
  const categoryColor = colorChart.find((color)=> color.name === props.element.color);

  useEffect(()=>{
    setIsActive(props.data.list[props.idx].isActive);
  }, [props.data])

  useEffect(()=>{
    props.setData((prev)=>{
      const copy=[...prev.list];
      copy[props.idx].isActive = isActive;
      copy[props.idx].isShow = isShow;
      return { ...prev, list:copy }
    })
  }, [isActive, isShow])



  return <div className={`
    inline-block relative rem:ml-[6px] rem:mb-[8px] rounded-30 text-[0px] shadow-[0_0_10px_0_rgba(0,0,0,0.15)] ${categoryColor.chart.bg.default100}
    ${ isShow ? "inline-block" : "hidden"}
  `}>
    <button type="button" className="rem:pl-[38px] rem:pr-[9px] rem:py-[7px]"
            onClick={()=>{
              //category click시 color picker value false
              if(props.colorPicker !== "none"){props.setColorPicker("none")}



              /*if(props.activeCount > 0){


                //click시 props.data.list.isActive value all false
                const update = props.data.list.map(function(element){
                  console.log(element);
                  return {
                    ...element,
                    isActive : false
                  }
                })
                props.setData({...props.data, list:update});

                const copy = props.data.list.slice(props.idx);
                console.log(copy);


                console.log(update);
                console.log("1개 이상");
                //setIsActive(true);
              }else {

              }*/
              setIsActive((prev)=>!prev);

            }}>
      <span className={`
        rem:w-[16px] rem:h-[16px] absolute top-[50%] rem:left-[13px] rem:mt-[-8px] rounded-100% ${isActive ? categoryColor.chart.bg.default200 : "bg-white"}
        before:content-[''] rem:before:w-[6px] rem:before:h-[6px] before:absolute before:top-[50%] before:left-[50%] rem:before:mt-[-3px] rem:before:ml-[-3px] before:rounded-100% before:bg-white
      `}/>
      <span className={`text-[16px] leading-[19px] ${categoryColor.chart.text.default500}`}>{props.element.category}</span>
    </button>
    <button type="button" className={`
      rem:w-[10px] rem:h-[10px] inline-block align-top relative rem:pr-[10px] rem:py-[13px] box-content
    `} onClick={()=>{setIsShow((prev)=>!prev)}}>
      <span className={`
        w-[100%] h-[100%] block relative rotate-[-45deg]
        before:content-[''] rem:before:w-[2px] rem:before:h-[10px] before:absolute before:top-[50%] before:left-[50%] rem:before:mt-[-5px] rem:before:ml-[-1px] ${categoryColor.chart.bg.before400}
        after:content-[''] rem:after:w-[10px] rem:after:h-[2px] after:absolute after:top-[50%] after:left-[50%] rem:after:mt-[-1px] rem:after:ml-[-5px] ${categoryColor.chart.bg.after400}
      `}></span>닫기
    </button>
  </div>
}