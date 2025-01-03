import React from 'react'
import './App.css'
import RandomUser from './components/RandomUser'
import Filter from './components/Filter'
// import OpenWeather from './components/OpenWeather'
import GetPokemon from './components/GetPokemon'

function App() {
  return (
    <div className='container'>
        <RandomUser/>
        <Filter/>
        {/* <OpenWeather/> */}
        <GetPokemon/>
    </div>
  )
}

export default App