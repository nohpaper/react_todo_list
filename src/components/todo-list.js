export default function TodoList(){
  return (
    <div className="w-[100%] h-[100vh] bg-[#FAFBFF]">
      <div className="rem:pt-[36px] rem:pb-[20px]">
        <div></div>
        <button className="rem:px-[31px] rem:py-[10px] rounded-30 rem:text-[20px] bg-white">4월 16일</button>
      </div>
      {/* main */}
      <div className="rem:w-[1730px] rem:h-[770px] relative m-auto rounded-30 overflow-hidden bg-white">
        <div className="rem:w-[407px] h-[100%] absolute top-0 right-0 bg-red-100">

        </div>
      </div>
    </div>
  )
}