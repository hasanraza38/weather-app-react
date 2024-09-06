import React, { useRef, useState } from 'react'
import Cards from './components/cards/cards'
import axios from "axios";


const App = () => {
      const search = useRef(null)      
      const [arr,setArr]=useState([])

async function getData() {
  
  const city = search.current.value
      await axios(`https://api.weatherapi.com/v1/current.json?key=3fe4c4377a554e6684152455241406&q=${city}&aqi=no`)
      .then((res)=>{
        console.log(res.data);
        arr.push(res.data)
        setArr([...arr])
       })
        .catch((err)=>{
        alert('Please Enter a Correct Spelling Of The City')
        console.log(err);
        })
}

function inputHandler(e) {
      e.preventDefault()
      getData()
      search.current.value=""      
}

  return (
          <>
        <div className='m-10 '>

        <h1 className='text-black text-center mt-5 text-4xl font-bold'>Weather App</h1>

        <form onSubmit={inputHandler}>
        <div className ="mt-4">
    <input
    ref={search}
      id ="search"
      type ="text"
      placeholder ="Enter city name"
      className="w-full p-4 border border-gray-300 rounded-lg"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
    />
       </div>
      </form>

    <div className=' flex flex-col gap-10 items-center justify-center mt-7'>
{
  arr.map((items)=>{
    console.log(items);
    return(
      <>
      <Cards city={items.location.name} localTime={items.location.localtime} country={items.location.country} image={items.current.condition.icon}  degree={items.current.temp_c} nature={items.current.condition.text}/>

      </>
    )
  })
}
    </div>


        </div>
        </>
  )
}
export default App












