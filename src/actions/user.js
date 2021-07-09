import { types } from "../types/types";


export const startUploadProfileImage = (photoURL) => {
  return {
    type: types.uploadProfileImage,
    payload: { 
      photoURL,
    }
  }
}


