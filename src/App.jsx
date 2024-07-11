import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Restaurants } from './components/restaurants'
import AddRestaurant from './components/addRestaurant'
import NavBar from './components/navBar'
import Search from './components/search'
import { IoAdd } from "react-icons/io5";
import Modal from './components/modal'
import { RxAvatar } from "react-icons/rx";
function App() {
  
  const [data, setData]= useState([
    {
      id:"1",
      name:"first",
      description:"best restro",
      location:"dehradun",
      type:"Vegetarian",
    },
    {
       id:"2",
      name:"test",
      description:"best restro",
      location:"dehradun",
      type:"Vegetarian",
    },
    {
      id:"3",
      name:"testing",
      description:"best restro",
      location:"delhi",
      type:"Vegetarian",
    },
    {
      id:"4",
      name:"test",
      description:"restro",
      location:"dehradun",
      type:"Vegetarian",
    },
    {
       id:"4",
      name:"veggie",
      description:"veg restro",
      location:"dehradun",
      type:"Vegetarian",
    },
    {
      id:"6",
      name:"test",
      description:"best restro",
      location:"dehradun",
      type:"Vegetarian",
    }
    
  ])
  const [toEditData, setToEditData] =useState({})
  const [isModalOpen, setIsModalOpen]= useState(false)
  const [searchResult, setSearchResult]= useState(null)
  

  return (
    <div className='w-[100vw] h-[100%] flex justify-start '>
      <NavBar/>
      <div className='w-[90%]' >
      <div className='border-b-2 flex justify-between border-gray-300 w-full text-black font-bold py-4 px-4 font-serif text-[20px]'>
          Welcome, Admin
          <RxAvatar className='text-orange-400 h-8 w-8 cursor-pointer'/>
          
        </div>
        
      <div className=' w-[100%] flex flex-col gap-10 items-start justify-start pl-4 pr-16 py-10 '>
        <div className='flex justify-between w-[100%]'>
        <Search setSearchResult={setSearchResult} data={data} />
        <button  onClick={()=>{
          setIsModalOpen(true)
        }}className='text-white bg-orange-500 px-4 py-2 flex gap-2 items-center'>
          <IoAdd className='text-white'/>
          Add New</button>
          
        </div>
        
        
    <Restaurants data={searchResult?searchResult: data} setData={setData} setToEditData={setToEditData} setIsModalOpen={setIsModalOpen}/>
    {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setToEditData={setToEditData}>
      <AddRestaurant setData={setData} data={data} toEditData={toEditData} setToEditData={setToEditData} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      </Modal>}
   
    </div>
    </div>
    
     
    </div>
  )
}

export default App
