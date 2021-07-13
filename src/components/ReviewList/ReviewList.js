import React from 'react'
import { ReviewCategories } from '../ReviewCategories/ReviewCategories';

/* 
  - Ordenar layout de las cards
  - Arreglar el tema de "Invalid date" (estamos recibiendo datos tipo fecha de firestore (BD))
  - Crear un componente "categorias" para separarlo de este componente (luego puedo arreglarlo de tal forma que 
  cada categoria tenga diferente color)
  - Poner un loading en las previsualizaciones de las imagenes de las cards (se demoran un poco en cargar)
*/
/*
  - Incorporar area de busqueda y filtrado en la pagina de "Reviews" 
  - Guardar lista de reviews en localStorage para que no se tenga que volver a renderizar el componente "ReviewList"
  - Arreglar el tema de la fecha que se ve en cada Review Card de la "ReviewList" (el año está mal)
  - Cambiar el "loading" por un spinner en la pagina de "Reviews" cuando carga la "ReviewList"
  - Redireccionar a la pagina del usuario cuando se presione el nombre del autor de la review en la 
    review card (AUN NO SE PUEDE HACER ESTO PORQUE AUN NO HAGO LA PAGINA DE CADA USUARIO)
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
            <div key={indexRev} className="md:h-64 max-w-md mx-auto my-3 sm:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="flex flex-col md:flex-row md:h-full">
                <div className="flex-shrink-0 md:h-full">
                  <img className="h-40 w-full md:h-full md:w-48 object-top hover:object-bottom object-cover" src={firstImage} alt={title}/>
                </div>
                <div className="h-full p-2 flex flex-col justify-between items-center">
                  <p className="mt-1 mb-2 text-center text-lg font-bold">{title}</p>
                  <p className="text-justify text-md line-clamp-3">{description}</p>
                  <div className="mt-1 ">
                    <ReviewCategories categories={categories}/>
                  </div>
                  <div className="mt-2 flex justify-between w-full text-xs">
                    <p>Escrito por <span className="underline font-medium">{authorName}</span></p>
                    <p>{new Date(date * 1000).toLocaleDateString()}</p>
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
