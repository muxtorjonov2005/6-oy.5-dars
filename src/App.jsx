import React from 'react'
import './App.css'
import RandomUser from './components/RandomUser'
import Filter from './components/Filter'
import OpenWeather from './components/OpenWeather'
import GetPokemon from './components/GetPokemon'
import LoginForm from './components/LoginForm'
import ContactForm from './components/ContactForm'
import RegistrationForm from './components/RegistrationForm'
function App() {
  return (
    <div className='container'>
        <RandomUser/>
        <Filter/>
        <OpenWeather/>
        <GetPokemon/>
        <LoginForm/>
        <ContactForm/>
        <RegistrationForm/>
    </div>
  )
}

export default App