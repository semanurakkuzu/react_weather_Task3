import React from 'react'

function Provinces() {
  return (
    <div className='pl-4 pb-10'>
      <select
        id="countries"
        className="bg-transparent border border-zinc-500 text-zinc-700 text-md rounded-lg p-2.5 w-64"
      >
        <option selected>Choose a province</option>
        <option value="istanbul">İstanbul</option>
        <option value="izmir">izmir</option>
        <option value="ankara">Ankara</option>
        <option value="antalya">Antalya</option>
      </select>
    </div>
  )
}

export default Provinces
