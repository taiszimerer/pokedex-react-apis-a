import React, { useContext } from 'react'
import { Card, DivColum, Types, Images, Image, ImagePokebola, DivRow, Details, Capture } from "./styles"
import pokebola from "../../icons/pokebola.png"
import { goToDetailsPage } from '../../routes/Coordinator';
import { useNavigate, useLocation } from 'react-router-dom';
import { PokemonTypes } from "../../PokemonTypes"
import { GlobalContext } from '../../context/GlobalContext';
import { getColors } from '../../CardColor';

export const PokemonCard = (props) => {
  const context = useContext(GlobalContext)
  const {addToPokedex, removeFromPokedex } = context;

  const { pokemon2, pokemon } = props;

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" &&
        <>
              <Card className='card' color={getColors(pokemon?.data.types[0]?.type.name)}>

                <DivColum className='div-flex-colum'>
                  <p className='number'> #0{pokemon.data.id} </p>
                  <h2 className='title-card'>{pokemon.data.name}</h2>

                  <Types className='row-types'>
                    {pokemon && PokemonTypes(pokemon.data.types[0].type.name)}
                    {pokemon.data.types[1]?.type.name && PokemonTypes(pokemon.data.types[1]?.type.name)}
                  </Types>
                </DivColum>

                <Images>
                  <Image src={pokemon.data.sprites.other.dream_world.front_default} />
                  {/* <ImagePokebola src={pokebola} /> */}
                </Images>

                <DivRow>
                  <Details onClick={() => goToDetailsPage(navigate, pokemon.id)}>Detalhes</Details>
                  <Capture onClick={() => addToPokedex(pokemon)}>
                    Capturar
                  </Capture>
                </DivRow>
              </Card>

        </>
      }



      {location.pathname === "/pokedex" &&
        <>

          <Card className='card'color={getColors(pokemon2?.data.types[0]?.type.name)}>

            <DivColum className='div-flex-colum'>
              <p className='number'> #0{pokemon2 && pokemon2.data.id} </p>
              <h2 className='title-card'>{pokemon2.data.name}</h2>

              <Types className='row-types'>
                {pokemon2 && PokemonTypes(pokemon2.data.types[0].type.name)}
                {pokemon2.data.types[1]?.type.name && PokemonTypes(pokemon2.data.types[1]?.type.name)}
              </Types>
            </DivColum>

            <Images>
              <Image src={pokemon2.data.sprites.other.dream_world.front_default} />
              {/* <ImagePokebola src={pokebola} /> */}
            </Images>

            <DivRow>
              <Details onClick={() => goToDetailsPage(navigate, pokemon2.id)}>Detalhes</Details>
              <Capture onClick={() => removeFromPokedex(pokemon2)}>
                Remover
              </Capture>
            </DivRow>
          </Card>

        </>
      }  </>


  )
}
export default PokemonCard;