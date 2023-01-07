import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import HeaderDetails from "../../components/HeaderDetails/HeaderDetails"
import { HomeDetails, CardDetails, InfosPokemon, Image, ImagePokebola } from './style';
import pokebola from "../../icons/pokebola.png"
import { GlobalContext } from '../../context/GlobalContext';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { BASE_URL } from '../../constants/BASE_URL';
import axios from 'axios';

const DetailPage = () => {
  const params = useParams();

  const pokemonName = params.pokemonName

  const [pokemonDetail, setPokemonDetail] = useState([])

  // const getDetails = async (id) => {
  //   const res = await fetch(`${BASE_URL}/pokemon/${id}`)
  //   const data = await res.json()
  //   return data
  // }

  // useEffect(() => {
  //   getDetails()
  //  }, [])

  useEffect(() => {
    fetchPokemonByName(pokemonName)
}, [])

     const fetchPokemonByName = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`)
            setPokemonDetail(response.data)
        } catch (error) {
            console.log(error);
        }
   }
   
   //const getDetails = async (id) => {
  //   try {
  //     const response = await
  //       axios
  //         .get(
  //           `${BASE_URL}/pokemon/${id}`
  //         )
  //     setPokemonDetail(response.data)
  //   } catch (error) {
  //     console.log(error.response)
  //   }
  // };

  //  useEffect(() => {
  //   getDetails(params.id)
  //  }, [])

  // const getDetails = async (id) => {
  //   const endpoints = []
  //   for (let i = 1; i < 41; i++) {
  //     endpoints.push(`${BASE_URL}/pokemon/${id}`)
  //   }
  //   console.log(endpoints)
  //   const res = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemonDetail(res))
  // }

  // useEffect(() => {
  //  getDetails()
  // }, [])


  return (
    <div>
      <HeaderDetails />
      <PokemonCard />
      {params.pokemonId}

      <HomeDetails className='home-details'>
        <h1 className='title'>Detalhes</h1>

        <CardDetails className='container-card-details'>
          <img className='quadrado-front' /*src={pokemonDetail.data.name} */ />
          <div className='base-stats'> </div>
          <InfosPokemon className='infos-pokemon'> 
          {/* <p className='number'> #0{pokemonDetail.data.id} </p>
          <h2 className='title-card'>{pokemonDetail.data.name}</h2> */}

          </InfosPokemon>
          <div className='quadrado-back'> </div>
          <div className='moves'> </div>
        </CardDetails>

        {/* <Image src={pokemonDetail.data.sprites.other.dream_world.front_default} /> */}
        <ImagePokebola src={pokebola} />
      </HomeDetails>
    </div>
  )
}

export default DetailPage;
