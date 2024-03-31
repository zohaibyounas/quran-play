import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Reciters = ({ reciters ,reciterHandler}) => {
    const [activeId , setActiveId] = useState<string>('')
  return (
    <div className="min-h-screen shadow-lg p-3 bg-red">
      <h1 className="text-2xl font-bold text-center  ">Reciters</h1><br /><hr />
      <ul className="text-left">
      {reciters && reciters.length > 0 ? (
        reciters.map(reciter => (
            <div key={reciter.id}>
            <li onClick={(e) => {
                reciterHandler(reciter) 
                setActiveId(reciter.id)
                }} 
                className={`bg-transparent border-0 text-white py-0 text-base pt-4 
                ${reciter.id === activeId && 'active'} `}
                >
              <FaUserCircle size={20} className="inline-block align-middle " />
              <span className="px-3 py-3 cursor-pointer ">{reciter.name}</span>
            </li>
            <hr className="my-5" />
          </div>   
        ))
      ):(
        <div className="text-center">
   <div className="spinner border-4 border-t-4 border-gray-200 rounded-full w-12 h-12"></div>

        </div>
        
      )}
      
       
      </ul>
    </div>
  );
};

export default Reciters;
