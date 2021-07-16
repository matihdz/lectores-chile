import React, { useEffect, useState } from 'react';
import { ReviewList } from '../../components/ReviewList/ReviewList';
import { db } from '../../firebase/firebase-config';
import { useForm, FormProvider } from "react-hook-form";
import { FormFilterOptions } from '../../components/FormFilterOptions/FormFilterOptions';

/* 
  - Terminar el buscador con los filtros incluidos (podria separar los botones en un componente aparte, ...)
*/
const filtersName = {
  titleR: "TITLE-R",
  titleB: "TITLE-B",
  tags: "TAGS",
  author: "AUTHOR",
  date: "DATE"
}

export const Home = () => {
  const methods = useForm();
  const handleSubmitSearch = data => console.log(data);

  const [filterActive, setFilterActive] = useState({
    [filtersName.titleR]: true
  })
  const [prevReviews, setPrevReviews] = useState([])
  const { loading, revs } = prevReviews

  useEffect(() => {
    setPrevReviews({ loading: true })
    db.collection(`reviews`).orderBy('date', 'desc').limit(4).get().then( snapshot => {
      setPrevReviews({
        revs: snapshot.docs.map( rev => rev.data()),
        loading: false,
      })
    })
  }, [])

  const handleInputActive = (e) => {
    e.preventDefault();
    setFilterActive({
      [e.currentTarget.name]: true
    })
  }

  return (
    <div className="md:p-8">
      <div className="max-w-screen-md mx-auto">
        <div className="flex items-center ">
          <p className="text-xs font-medium mr-1">Filtrar por:</p> 
          <div>
            <button onClick={handleInputActive} name={filtersName.titleR} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs focus:outline-none"><i className="fas fa-heading"></i></button>
            <button onClick={handleInputActive} name={filtersName.titleB} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs focus:outline-none"><i className="fas fa-book"></i></button>
            <button onClick={handleInputActive} name={filtersName.tags} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs focus:outline-none"><i className="fas fa-tags"></i></button>
            <button onClick={handleInputActive} name={filtersName.author} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs focus:outline-none"><i className="fas fa-at"></i></button>
            <button onClick={handleInputActive} name={filtersName.date} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs focus:outline-none"><i className="fas fa-clock"></i></button>
          </div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmitSearch)} className="bg-secondary rounded-sm flex flex-col justify-between items-center shadow ">
            <div className="p-2 w-full">
              <FormFilterOptions filterActive={filterActive} filtersName={filtersName}/>
            </div>
            <button className="w-9/12 focus:outline-none px-4 py-3 hover:bg-quaternary">
              <i className="fas fa-search text-tertiary "></i>
            </button>
          </form>
        </FormProvider>
      </div>
      <div>
        {
          (loading)
          ? <p>Cargando reseñas...</p>
          : <ReviewList reviews={revs}/>
        }
      </div>

    </div>
  )
}
