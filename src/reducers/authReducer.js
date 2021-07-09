import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        userName: action.payload.userName,
        email: action.payload.email,
        isLogged: true
      }
    case types.logout:
      return { 
        isLogged: false
      }
  
    default:
      return state;
  }
}