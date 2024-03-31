import { useState } from "react";
const Chapter = ({ chapters, chapterHandler }) => {
    const [activeId,setActiveId] = useState('')
  return (
    <div className="min-h-screen  shadow-lg p-3 bg-red">
      <h1 className="text-2xl font-bold text-center ">Chapter</h1>
      <br />
      <hr />
      <ul  className="list-group text-end">
        {chapters && chapters.length > 0 ?
            chapters.map(chapter =>(
                <div key={chapter.id}>
                <li onClick={(e) =>{
                   chapterHandler(chapter) 
                   setActiveId(chapter.id)
                }} 
                className={`list-group-item bg-transparent border-0 text-light py-0 flex justify-between cursor-pointer ${activeId === chapter.id && 'active'} `}>
                <span className="p-4">{chapter.id}</span>
                <span className="p-4">{chapter.name_arabic}</span>
                {""}
              </li>
              <hr className="my-1" />
              </div>
            )):(
                <div className="text-center">
   <div className="spinner border-4 border-t-4 border-gray-200 rounded-full w-12 h-12"></div>

        </div> 
            )
        }
       
      </ul>
    </div>
  );
};

export default Chapter;
