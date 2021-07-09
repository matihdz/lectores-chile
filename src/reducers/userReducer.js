import { types } from "../types/types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.uploadProfileImage:
      return {
        photoURL: action.payload.photoURL
      }
  
    default:
      return state;
  }
}