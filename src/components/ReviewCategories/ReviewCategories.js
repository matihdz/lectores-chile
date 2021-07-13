import React from 'react'

export const ReviewCategories = ({categories}) => {
  return (
    <div className="flex flex-wrap w-full">
      {
        categories.map( (category, indexCat) => {
          const { label, value } = category
          return (
            <p key={indexCat} className="w-max mx-1 my-1 bg-quinary rounded-xl text-xs p-1">{value}</p>
          )
        })
      }
    </div>
  )
}
