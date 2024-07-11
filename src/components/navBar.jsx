

function NavBar() {
  return (
    <div className="w-[15%] h-[100%] border-r-2 border-gray-300 flex flex-col gap-10 py-6 items-center px-4">
    <div className="text-orange-500 font-serif font-bold text-[20px]">
        FOODIE DELIGHT
    </div>
    
    <ul className="text-black font-bold w-full">
        <li  className="py-3 px-4 bg-orange-300 text-orange-400 rounded-md">
            Restaurants
        </li>
    </ul>
    </div>
  )
}

export default NavBar