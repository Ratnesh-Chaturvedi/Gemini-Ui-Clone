import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
function Card({ title, src }) {
 const {input,setInput}=useContext(Context)
  return (
    <div onClick={()=>setInput(title)} className="group w-[200px] h-[150px] bg-[#6dc0ff] relative p-4 mt-4 mr-2 rounded-2xl shadow-md [perspective:1000px] cursor-pointer">
      <div className="w-full h-full bg-white rounded-xl shadow-xl transition-transform duration-500 transform group-hover:rotate-y-12 group-hover:scale-105">
        <div className="flex flex-col justify-between h-full p-4 relative">
          <p className="text-lg font-semibold text-gray-800">{title}</p>
          <img
            src={src}
            alt=""
            className="w-[30px] absolute bottom-3 right-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
