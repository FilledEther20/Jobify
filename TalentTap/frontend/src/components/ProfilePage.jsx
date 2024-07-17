import React from 'react'
import Navbar from './Navbar'
import GetProfile from '../services/GetProfile'
const ProfilePage = (prop) => {
  const data=GetProfile(prop);//to get profile from the backend
  return (
    <>
        <Navbar/>
        
    </>
  )
}

export default ProfilePage