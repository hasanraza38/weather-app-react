import React from 'react'

function Searchbar() {
  return (
    <>
    <form>
  <div className ="mt-4">
    <input
      id ="search"
      type ="text"
      placeholder ="Enter city name"
      className="w-full p-4 border border-gray-300 rounded-lg"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
    />
  </div>
</form>
    </>
  )
}

export default Searchbar