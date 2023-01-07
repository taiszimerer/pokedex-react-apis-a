import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import DetailPage from "../pages/DetailPage/DetailPage"
import ErrorPage from '../pages/ErrorPage/ErrorPage'


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path='/pokedex' element={<PokedexPage/>} />
                <Route path="/pokemon/:pokemonName" element={<DetailPage/>}/>                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )

  
}
