import classNames from "classnames";

export function Bord(props) {
  return (
    <div className={`w-[${props.isList ? "350px" : "100%"}]  rem:min-h-[250px] rem:pt-[13px] rem:pr-[25px] rem:pb-[25px] rem:pl-[15px] box-border rounded-20 bg-${props.bgColor}-100`}>{ props.children }</div>
  )
}

export function Category(){
  return (
    /*<input type="text" name="category" className={classNames("rounded-20 py-[6px] pr-[16px] pl-[35px]", {
      active : isAction
    })}/>*/
    <div className="w-[min-content]">
      <input type="text" name="category" className="w-[100%] rounded-20 py-[6px] pr-[16px] pl-[35px]"/>
    </div>
  )
}

export function CheckButton(){
  return (
    <input type="checkbox"/>
  )
}

export function MoreButton(){
  return (
    <div>
      <button type="button">더보기</button>
      <div>
        <button type="button">중요</button>
        <button type="button">제거</button>
      </div>
    </div>
  )
}

export function CheckList(){
  return (
    <div>
      <CheckButton></CheckButton>
      <input type="text"/>
      <MoreButton></MoreButton>
    </div>
  )
}