import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FcDeleteDatabase } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export function Restaurants({ data, setData, setToEditData,setIsModalOpen }) {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    setCurrentPage(1);
    
  },[data])
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  function editDetails(ele) {
    setToEditData({ ...ele });
  }

  function deleteRestaurant(ele) {
    let filteredData = data.filter((res) => res.id !== ele.id);
    setData(filteredData);
  }

  function nextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  return (
    <div className="w-[100%]">
      {data.length > 0 ? 
        <>
        <table className="w-[100%] text-black rounded-md ">
          <thead>
            <tr  className="border-gray-300 border-b-2 text-gray-600">
              <th className="py-3 px-1">Name</th>
              <th className="py-3 px-1">Description</th>
              <th className="py-3 px-1">Location</th>
              <th className="py-3 px-1">Type</th>
             
            </tr>
          </thead>
          <tbody className="w-[100%]" >
            
            {currentData.map((ele) => (
              <>
             
             
              <tr key={ele.id} className="hover:bg-gray-300 mx-6 w-[100%] border-gray-300 border-y-2 py-2  " >
                <td className="text-center py-2 px-1">{ele.name}</td>
                
                <td className="text-center py-2 px-1">{ele.description}</td>
                <td className="text-center py-2 px-1">{ele.location}</td>
                <td className="text-center py-2 px-1">{ele.type}</td>
                <td className="text-center py-2 px-1 flex gap-4">
                  <button
                    onClick={() => {
                    
          
                        setIsModalOpen(true)
                      
                    
                      editDetails(ele)}}
                    className="bg-[#CCE7D7] text-[#018837]"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteRestaurant(ele)}
                    className="bg-[#FFDCDC] text-[#FF0404]"
                  >
                    <MdDelete />
                  </button>
                </td>
               
              </tr>
              
              
              
              </>
            ))}
           
          </tbody>
        </table>
      
      <div className="flex w-full justify-center items-center gap-2 py-4">
       
          <IoIosArrowBack onClick={prevPage}
          disabled={currentPage === 1}
          className={`${currentPage===1?"text-gray-400":"text-orange-500"}  text-[20px] disabled:opacity-50 cursor-pointer `}/>
       
        <span className="text-black text-[18px]">{currentPage}</span>
        
          <IoIosArrowForward onClick={nextPage}
          
          className={`${currentPage===totalPages?"text-gray-400":"text-orange-500"}  text-[20px] disabled:opacity-50 cursor-pointer `}/>
       
      </div>
      </>
      :
      <div className="w-full h-[20vh] border-2 border-gray-300 flex justify-center items-center rounded-lg">
       
        <div className="flex flex-col gap-3 items-center justify-center">
          <FcDeleteDatabase className="w-12 h-12 "/>
          <div className="text-[20px] font-bold text-gray-600">No Data </div>
          </div>
        
      </div>
     
      }
    </div>
  );
}
