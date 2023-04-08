import React from 'react'

function Cards() {
  return (
    <div className='flex justify-center'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Monday</div>
        </div>
        <img
          className="w-full weather_img"
          src="https://help.apple.com/assets/63D05C783BCDFA1144706932/63D05C793BCDFA1144706939/tr_TR/dc7f8cdb406dc7704cccb5188ddc28c1.png"
          alt="Sunset in the mountains"
          
        
        />
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Low
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            High
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cards
