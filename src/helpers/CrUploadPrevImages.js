import { storage } from "../firebase/firebase-config";

export const CrUploadPrevImages = (prevImages, idReview) => {
  const file = prevImages[0];
  console.log(file)
  const storageRef = storage.ref(`/reviews/${idReview}/1`);
  const task = storageRef.put(file);
  task.on('state_changed', snapshot => {
    /*EL ERROR ESTÁ POR ACA, TIRA UNDEFINED EL "URL"*/
  }, error => {
    console.log(error)
  }, async () => {
    const url = await task.snapshot.ref.getDownloadURL().then( url => url);
    console.log(url)
    return url;
  })
}