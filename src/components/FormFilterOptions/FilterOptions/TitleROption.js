import React from 'react'

export const TitleROption = ({isThisFilterActive, setValue, filterName}) => {
  const idInputName = `filterForm-${filterName}`
  setValue(filterName, document.querySelector(`#${idInputName}`))
  return (
    <input 
      className={`${isThisFilterActive ? 'block' : 'hidden'} w-full text-primary text-lg py-6 px-6 focus:outline-none`}
      id={idInputName} type="text" 
      placeholder="Ej: Reseña del principito"
      autoComplete="off"
    />
  )
}
