import React from "react";
import { setPages } from "../helper/pages";

interface Props{
     totalpages:number;
     setPage:(i:number)=>void;
     currentpage:number;
}
const Pagination :React.FC<Props> = ({totalpages ,setPage,currentpage}) => {
  return (
    <div className="w-full flex justify-center items-center p-4 gap-4">
      <button disabled={currentpage ===1} onClick={()=>setPage(currentpage-1)} className="disabled:cursor-not-allowed">Prev</button>
      {setPages(totalpages).map((page)=>
          <div key={page} className={"p-4 border-2 border-red-500 cursor-pointer " + `${currentpage==page ? 'bg-red-700':''}`} onClick={()=> setPage(page)}>
             {page}
          </div>
      )}
      <button disabled={currentpage===totalpages} onClick={()=> {
        setPage(currentpage+1)}} className="disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination
