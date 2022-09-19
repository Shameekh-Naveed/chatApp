import React from 'react'

const Mainbar = () => {

  const scrollBarStyle = {   // Hiding the scroll bar
    'scrollbarWidth': 'none', /* Firefox */
    'msOverflowStyle': 'none'  /* Internet Explorer 10+ */
  }
  return (
    // <div className='w-96'>he</div>
    <div className='col-span-5 flex flex-col text-white px-9 py-3 h-full overflow-y-auto' style={scrollBarStyle}>
      <div className="section mt-2 mb-4">
        <h2 className='text-2xl font-semibold'>Chat Room</h2>
      </div>
      <div className="section my-3">
        <h4 className='my-2 font-semibold text-base'>Favourites</h4>
        <ul className='text-slate-400 text-base'>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
        </ul>
      </div>
      <div className="section my-3">
        <h4 className='my-2 font-semibold text-base'>Direct Messages</h4>
        <ul className='text-slate-400 text-base'>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person A</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person B</li>
          <li className='my-2 py-1 cursor-pointer  hover:text-white active:text-white'><img className='inline mr-5' src="https://img.icons8.com/ios/27/000000/user-male-circle.png"/>Person C</li>
        </ul>
      </div>
    </div>
    )
}

export default Mainbar