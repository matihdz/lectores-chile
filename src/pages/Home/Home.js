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
      <div className="ml-10 flex items-center">
        <p className="text-xs font-medium mr-1">Filtrar por:</p> 
        <div>
          <button onClick={handleInputActive} name={filtersName.titleR} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs"><i className="fas fa-heading"></i></button>
          <button onClick={handleInputActive} name={filtersName.titleB} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs"><i className="fas fa-book"></i></button>
          <button onClick={handleInputActive} name={filtersName.tags} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs"><i className="fas fa-tags"></i></button>
          <button onClick={handleInputActive} name={filtersName.author} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs"><i className="fas fa-at"></i></button>
          <button onClick={handleInputActive} name={filtersName.date} className="w-max mx-px p-2 bg-secondary text-tertiary rounded-t-lg text-xs"><i className="fas fa-clock"></i></button>
        </div>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmitSearch)} className="bg-secondary flex items-center rounded-full shadow p-4">
          <FormFilterOptions filterActive={filterActive} filtersName={filtersName}/>
          <button className="rounded-full p-2 focus:outline-none hover:bg-quinary w-12 h-12 flex items-center justify-center">
            <i className="fas fa-search text-tertiary "></i>
          </button>
        </form>
      </FormProvider>
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
