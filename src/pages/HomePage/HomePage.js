import React, { useContext } from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from '../../context/GlobalContext'
import { CardsContainer } from './style'

const HomePage = () => {

  const context = useContext(GlobalContext)
  const {pokemon} = context

  return (
    <div>
      <HeaderHome />
      <CardsContainer>
      <h1 className='title'> Todos os Pokémons </h1>
      {pokemon && pokemon.map((pokemon) => {
      return <PokemonCard 
      key={pokemon.data.name}
      pokemon={pokemon}
      />
    })}
    </CardsContainer>
    </div>
  )
}

export default HomePage;
