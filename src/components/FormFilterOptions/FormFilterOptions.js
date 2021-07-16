import React from 'react'
import { useFormContext } from "react-hook-form";
import './customTags.css'

export const FormFilterOptions = ({filterActive, filtersName}) => {
  const { titleR, titleB, tags, author, date } = filtersName;

  const returnInputOfFilterActive = () => {
    if(filterActive[titleR]) {
      return (
        <input 
          className="bg-indigo-50 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none mr-1" 
          id="search" type="text" 
          placeholder="Ej: Reseña del principito"
          autoComplete="off"
        />
      )
    } else if(filterActive[titleB]){
      return (
        <input 
          className="bg-indigo-50 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none mr-1" 
          id="search" type="text" 
          placeholder="Ej: El principito"
          autoComplete="off"
        />
      )
    } else if(filterActive[tags]){
      return (
        <div className="w-full">
          <input id="checkboxComboCAT" type="checkbox" className="checkboxFilterCategory"/>
          <label htmlFor="checkboxComboCAT" className="labelFilterCategory">tag1</label>
        </div>
        
      )
    }
  }
  

  return (
    <div className="w-full">
      {
        filterActive && returnInputOfFilterActive()
      }
    </div>
  )
}

/* 
<input 
  className="bg-indigo-50 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none mr-1" 
  id="search" type="text" 
  placeholder="Ej: Reseña del principito"
  autoComplete="off"
/>
*/
