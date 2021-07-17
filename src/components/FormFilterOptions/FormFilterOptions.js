import React from 'react'
import { useFormContext } from "react-hook-form";
import { CheckBoxGroup } from './FilterOptions/TagsOption';
import './customTags.css'

/* 
- Validar Campos al presionar en buscar en el formulario, con Schemas de YUP (en la parte de la pagina HOME)
*/

const styleByDefaultOfNormalInputs = 'w-full text-primary text-lg py-6 px-6 focus:outline-none rounded-sm'
const timeBetweenDates = {
  dateStart: 'DATE-START',
  dateEnd: 'DATE-END'
}

export const FormFilterOptions = ({filterActive, filtersName}) => {
  const { setValue, register } = useFormContext();
  const { titleR, titleB, tags, author, date } = filtersName;
  
  return (
    <div className="w-full">
      {/* TITLE REVIEW */}
      <input 
        {...register(titleR)}
        className={`${filterActive[titleR] ? 'block' : 'hidden'} ${styleByDefaultOfNormalInputs}`}
        type="text" 
        placeholder="Ej: Reseña del principito"
        autoComplete="off"
      />
      {/* TITLE BOOK */}
      <input 
        {...register(titleB)}
        className={`${filterActive[titleB] ? 'block' : 'hidden'} ${styleByDefaultOfNormalInputs}`}
        type="text" 
        placeholder="Ej: El principito"
        autoComplete="off"
      />
      {/* AUTHOR */}
      <input 
        {...register(author)}
        className={`${filterActive[author] ? 'block' : 'hidden'} ${styleByDefaultOfNormalInputs}`} 
        type="text" 
        placeholder="Ej: Matias Iturrieta"
        autoComplete="off"
      />
      {/* DATE */}
      <div className={`${filterActive[date] ? 'block' : 'hidden'} text-center text-tertiary flex flex-col justify-center align-center max-w-md mx-auto`}>
        <label>Desde
          <input 
            {...register(timeBetweenDates.dateStart)}
            className={`${styleByDefaultOfNormalInputs}`}
            id="search" type="date" 
            placeholder="Ej: El principito"
            autoComplete="off"
          />
        </label>
        <label>Hasta
          <input 
            {...register(timeBetweenDates.dateEnd)}
            className={`${styleByDefaultOfNormalInputs}`}
            id="search" type="date" 
            placeholder="Ej: El principito"
            autoComplete="off"
          />
        </label>
      </div>
      {/* TAGS */}
      <CheckBoxGroup isThisFilterActive={filterActive[tags]} filterName={tags} setValue={setValue}/>
    </div>
  )
}