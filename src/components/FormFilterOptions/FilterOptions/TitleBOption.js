import React from 'react'

export const TitleBOption = ({isThisFilterActive, setValue, filterName}) => {

  return (
    <input 
        className={`${isThisFilterActive ? 'block' : 'hidden'} w-full text-primary text-lg py-6 px-6 focus:outline-none`}
        id="search" type="text" 
        placeholder="Ej: El principito"
        autoComplete="off"
    />
  )
}
