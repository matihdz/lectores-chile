import { types } from "../types/types"
import { firebase, storage } from '../firebase/firebase-config';
import { startUploadProfileImage } from "./user";
import { newUserDB } from "../firebase/actionsDB";


export const startRegisterWithUsernameEmailPassword = (userName, email, password) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async (userCredential) => {
        await userCredential.user.updateProfile({ displayName: userName});
        await newUserDB(userCredential.user.uid, userName, email);
        dispatch( login(userCredential.user.uid, userName, email) );
      })
      .catch( e => {
        console.log(e);
      })
  }
}

export const startLoginWitEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (userCredential) => {
        const { uid, displayName } = userCredential.user;
        dispatch( login(uid, displayName, email));
        
        //Cargar imagen de perfil
        const storageRef = storage.ref(`/users/${uid}/images/profileImg`);
        if(storageRef){
          storageRef.getDownloadURL()
          .then( url => {
            dispatch( startUploadProfileImage(url) );
          }).catch( err => console.log(err))
        } 
      })
  }
}

export const startLogout = () => {
  return async ( dispatch ) => {
    await firebase.auth().signOut();

    dispatch( logout() );
    dispatch( startUploadProfileImage(null) );
  }
}

export const logout = () => ({
  type: types.logout
})

export const login = (uid, userName, email) => {
  return {
    type: types.login,
    payload: {
      uid,
      userName,
      email
    }
  }
}