import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUploadProfileImage } from '../../actions/user';
import { storage } from '../../firebase/firebase-config'
import "./style.css";

export const AccountSetting = () => {
  const { userName, uid } = useSelector( state => state.auth);
  const { photoURL } = useSelector( state => state.user);
  const dispatch = useDispatch();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref(`/users/${uid}/images/profileImg`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {

    }, error => {
      console.log(error)
    }, async () => {
      const url = await task.snapshot.ref.getDownloadURL().then( url => url);
      dispatch( startUploadProfileImage( url ) );
    })
  }
  return (
    <section className="mt-5">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center relative">
          <img 
            alt="an user profile"
            src={photoURL}
            className="img__hover-change-profile w-60 h-60 rounded-full object-cover img-hover-change relative z-10"
          />
          <label 
            htmlFor="profile-img-change" 
            className="label__button-upload-img absolute bottom-3.5 z-20 cursor-pointer bg-quinary text-tertiary font-bold py-2 px-4 rounded-full"
          >
            <i className="fas fa-file-upload"></i>
          </label>
          <input id="profile-img-change" className="hidden" type="file" onChange={handleUpload}/>
        </div>
        <h2 className="font-bold text-2xl mt-3">{userName}</h2>
      </div>
    </section>
  )
}
