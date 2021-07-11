import React from 'react'

/* 
  - Ordenar layout de las cards
  - Arreglar el tema de "Invalid date" (estamos recibiendo datos tipo fecha de firestore (BD))
  - Crear un componente "categorias" para separarlo de este componente (luego puedo arreglarlo de tal forma que 
  cada categoria tenga diferente color)
  - Poner un loading en las previsualizaciones de las imagenes de las cards (se demoran un poco en cargar)
*/

export const ReviewList = ({reviews}) => {
  console.log(reviews)
  return (
    <>
      {
        reviews && reviews.map( (rev, indexRev) => {
          const { authorName, categories, date, description, prevImages, title } = rev;
          const firstImage = prevImages[0]
          return (
            <div key={indexRev} className="max-w-md mx-auto my-3 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={firstImage} alt={title}/>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <p className="mt-1 text-lg leading-tight font-medium hover:underline">{title}</p>
                  <p className="mt-2">{description}</p>
                  {
                    categories.map( (category, indexCat) => {
                      const { label, value } = category
                      return (
                        <p key={indexCat} className="w-max my-2 bg-quinary rounded-xl text-xs p-1.5">{value}</p>
                      )
                    }
                    )
                  }
                  <div className="flex justify-evenly w-full">
                    <p>{authorName}</p>
                    <p>{new Date(date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  )
}
