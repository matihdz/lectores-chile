import React from 'react'
import { useFormContext } from "react-hook-form";
import { optionsCategory } from '../../helpers/optionsCategory';
import './customTags.css'

export const FormFilterOptions = ({filterActive, filtersName}) => {
  const { titleR, titleB, tags, author, date } = filtersName;

  const returnInputOfFilterActive = () => {
    if(filterActive[titleR]) {
      return (
        <input 
          className="w-full text-primary text-lg py-6 px-6 focus:outline-none" 
          id="search" type="text" 
          placeholder="Ej: Reseña del principito"
          autoComplete="off"
        />
      )
    } else if(filterActive[titleB]){
      return (
        <input 
          className="w-full text-primary text-lg py-6 px-6 focus:outline-none" 
          id="search" type="text" 
          placeholder="Ej: El principito"
          autoComplete="off"
        />
      )
    } else if(filterActive[tags]){
      return (
        <div className="flex flex-wrap p-2">
          {
            optionsCategory.map( (opt, index) => {
              const { label, value} = opt
              return (
                <div key={index} className="p-2">
                  <input id={`checkboxComboCAT-${index}`} type="checkbox" className="checkboxFilterCategory"/>
                  <label htmlFor={`checkboxComboCAT-${index}`} className="labelFilterCategory p-1 rounded-sm cursor-pointer select-none text-sm">{value}</label>
                </div>
              )
            })
          }
        </div>
        
      )
    } else if(filterActive[author]){
      return (
        <input 
          className="w-full text-primary text-lg py-6 px-6 focus:outline-none" 
          id="search" type="text" 
          placeholder="Ej: Matias Iturrieta"
          autoComplete="off"
        />
      )
    } else if(filterActive[date]){
      return (
        <div className="text-center text-tertiary flex flex-col justify-center align-center max-w-md mx-auto">
          <label>Desde
            <input 
              className="w-full text-primary text-lg py-6 px-6 focus:outline-none" 
              id="search" type="date" 
              placeholder="Ej: El principito"
              autoComplete="off"
            />
          </label>
          <label>Hasta
            <input 
              className="w-full text-primary text-lg py-6 px-6 focus:outline-none" 
              id="search" type="date" 
              placeholder="Ej: El principito"
              autoComplete="off"
            />
          </label>
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
