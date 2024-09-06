import React from 'react'

function Cards(props) {
  return (
    <>
<div className="card card-side bg-zinc-300 shadow-2xl shadow-zinc-500 w-80 rounded-xl ">
  <figure className='flex justify-center items-center pl-5'>
    <img className='w-32'
      src={props.image}
      alt="weather" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl font-bold">{props.city}</h2>
    <p className='text-xs text-gray-500'>{props.localTime},{props.country}</p>
    <h1 className='text-black font-semibold text-4xl'>{props.degree}°C</h1>
    <h3 className='text-[1.2rem] font-light'>{props.nature}</h3>
  </div>
</div>
    </>
  )
}

export default Cards