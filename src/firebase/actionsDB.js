import { db, firebase } from "./firebase-config";

export const newUserDB = (uid, userName, email) => {
  const idReviews = []
  db.collection('users').doc(`${uid}`).set({
    userName,
    email,
    idReviews
  })
  .then(() => {
      console.log("Usuario creado en la BD!");
  })
  .catch((error) => {
      console.error("Error al crear el usuario en la BD: ", error);
  });
}

export const newReviewDB = (authorName, title, description, categories) => {
  return new Promise( (resolve, reject) => {
    const prevImages = []
    db.collection('reviews').add({
      authorName,
      title,
      description,
      categories,
      prevImages,
    })
    .then((docRef) => {
      console.log("Reseña creada con el ID: ", docRef.id);
      resolve(docRef.id);
    })
    .catch((error) => {
      console.error("Error al crear la reseña: ", error);
      reject(error)
    });
  })
}
export const uploadImagesToReviewDB = (idReview, prevImages) => {
  db.collection('reviews').doc(`${idReview}`).update({
    prevImages: firebase.firestore.FieldValue.arrayUnion(...prevImages)
  })
  .then(() => {
    console.log(`Url de imagenes subidas al storage añadidas al documento de la reseña ${idReview}`);
  })
  .catch((error) => {
      console.error("Error al crear la reseña: ", error);
  });
}

export const addIDReviewToTheUserDB = (uid, idNewReview) => {
  db.collection('users').doc(`${uid}`).update({
    reviews: firebase.firestore.FieldValue.arrayUnion(idNewReview)
  })
  .then(() => {
      console.log(`Nueva reseña agregada al usuario en la BD!`);
  })
  .catch((error) => {
      console.error(`Error al agregar reseña al usuario en la BD: `, error);
  });
}