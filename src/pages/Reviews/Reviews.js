import React, { useEffect, useState } from 'react'
import { ReviewList } from '../../components/ReviewList/ReviewList'
import { db } from '../../firebase/firebase-config'



export const Reviews = () => {
  const [prevReviews, setPrevReviews] = useState([])
  const { loading, revs } = prevReviews

  useEffect(() => {
    setPrevReviews({ loading: true })
    db.collection(`reviews`).orderBy('date').limit(4).get().then( snapshot => {
      setPrevReviews({
        revs: snapshot.docs.map( rev => rev.data()),
        loading: false,
      })
    })
  }, [])
  return (
    <div>
      <h1>Busca reseñas: </h1>
      {
        (loading)
        ? <p>Cargando reseñas...</p>
        : <ReviewList reviews={revs}/>
      }
    </div>
  )
}
