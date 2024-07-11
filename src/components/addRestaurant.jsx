import  { useEffect, useState } from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import Mapbox from './mapbox';

function AddRestaurant({setData, data,setToEditData,toEditData, isModalOpen, setIsModalOpen}) {
  const restaurantTypes = [
    "Vegetarian",
    "Non-Vegetarian",
    "Chinese",
    "Indian",
  ];
  const [selectFromMap, setSelectFromMap]= useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    location: '',
    type: "Vegetarian",
  });
  useEffect(()=>{
    if(Object.keys(toEditData).length>0){
      setFormValues(toEditData)
      
    }
  
  },[toEditData])

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let length= data.length;
    let updatedData=[...data]
    if(!formValues.hasOwnProperty("id")){
    formValues["id"]= `${length+1}`
    
    updatedData= [formValues,...data,]
    }else{
      console.log("inside else")
      let selectedResInd= data.findIndex((res)=>res.id===formValues["id"])
      console.log("selectedResInd",selectedResInd,  formValues)
      updatedData[selectedResInd]={...formValues}
      
    }
    
    
    setData(updatedData)
    setToEditData({})
    setFormValues({
      name: '',
    description: '',
    location: '',
    type: restaurantTypes[0],
      
    })
    setIsModalOpen(false)
    
    
    
  };

  return (
    <>
    {!selectFromMap?
    <div className="w-[100%] pt-10 pb-4">
      <div className='text-black w-full h-full px-10 flex items-center text-[20px] font-bold'>Add Restaurant Details</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-10 rounded-md pt-4">
        <input
          className="w-full p-2 bg-gray-100 text-black border rounded-md"
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
          required="true"
        />
        <textarea
          className="w-full p-2 bg-gray-100 rounded-md text-black h-28"
          type="text"
          name="description"
          placeholder="Description"
          value={formValues.description}
          onChange={handleChange}
           required="true"
        />
        <div className='flex gap-4 items-center'>
          
        <input
          className="w-full p-2 bg-gray-100 rounded-md text-black"
          type="text"
          name="location"
          placeholder="Location"
          value={formValues.location}
          onChange={handleChange}
           required="true"
        />
        <FaMapMarkedAlt className='w-6 h-d text-green-400 cursor-pointer' onClick={()=>{
          setSelectFromMap(true)
        }}/>
        </div>
        <select
          className="w-full p-2  rounded-md text-green-500 bg-green-200"
          name="type"
          value={formValues.type}
          onChange={handleChange}
          
        >
          {restaurantTypes.map((type) => (
            <option value={type} className='!py-2 hover:!bg-orange-100' key={type}>{type}</option>
          ))}
        </select>
        <div className='w-full flex items-center justify-center'>
        {Object.keys(toEditData).length>0?
        <button className="w-[35%] bg-orange-400" type="submit">Update</button>
        
        :
        <button className="w-[35%] bg-orange-400" type="submit">Add</button>
        
}
</div>
      </form>
    </div>:
    
    <div className="w-[100%] pt-10 pb-4">
      <Mapbox formValues={formValues} setFormValues={setFormValues} setSelectFromMap={setSelectFromMap}/>
   
  </div>}
  </>
  );
}

export default AddRestaurant;
