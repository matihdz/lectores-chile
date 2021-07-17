import React, { useReducer } from 'react'
import { optionsCategory } from '../../../helpers/optionsCategory'

const reducer = (state, action) => {
  if (state.checkedIds.includes(action.value)) {
    return {
      ...state,
      checkedIds: state.checkedIds.filter(value => value !== action.value)
    }
  }
  
  return {
    ...state,
    checkedIds: [
      ...state.checkedIds,
      action.value
    ]
  }
}

export const CheckBoxGroup = ({isThisFilterActive, setValue, filterName}) => {
  const initialState = { checkedIds: [] }
  const [state, dispatch] = useReducer(reducer, initialState)


  setValue(filterName, state)
  return (
    <div className={`${isThisFilterActive ? 'block' : 'hidden'} flex flex-wrap p-2`}>
    {
      optionsCategory.map( (opt, index) => {
        const { label, value} = opt
        return (
          <div key={index} className="p-2">
            <input 
              id={value} 
              type="checkbox" 
              className="checkboxFilterCategory"
              onClick={() => dispatch({ value })}
              checked={state.checkedIds.includes(value)}
            />
            <label htmlFor={value} className="labelFilterCategory p-1 rounded-sm cursor-pointer select-none text-sm">{value}</label>
          </div>
        )
      })
    }
    </div>
  )
}
