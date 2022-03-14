import React, { useEffect, useState } from 'react'
import { getGifs } from '../helper/getGif';
import { useFletchGif } from '../hooks/useFletchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

  const { data:imagenes, loading } = useFletchGif(categoria);
  
  //Componente para que un componente solo se ejecute una sola vez

  return (
    <>
      <h3 className='card animate_animated animate_fadeIn'>{ categoria }</h3>
      
      {loading && <p>Cargando...</p>}

      <div className='card-grid'>
        

        {
          imagenes.map(img => (
            <GifGridItem 
              key = { img.id } 
              { ...img}
            
            />
          ))
        }
    </div>
    </>
    
  )
}