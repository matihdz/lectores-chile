import { storage } from "../firebase/firebase-config";

export const CrUploadPrevImages = (prevImages, idReview) => {
  return Promise.all(
    prevImages.map( (imgFile, index) => getUrlofImageUploaded(imgFile, index, idReview))
  )
  .then( urlsOfImages => urlsOfImages)
  .catch( err => console.log(err))
}

export const getUrlofImageUploaded = (imgFile, index, idReview) => {
  return new Promise( (resolve, reject) => {
    const storageRef = storage.ref(`/reviews/${idReview}/${index}`);
    const task = storageRef.put(imgFile);
    task.on('state_changed', snapshot => {
    }, error => {
      console.log(error)
      reject(error)
    }, async () => {
      const url = await task.snapshot.ref.getDownloadURL().then( url => url);
      resolve(url)
    })
  })
}