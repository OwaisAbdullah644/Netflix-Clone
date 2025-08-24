import React from 'react'
import PreferenceNavbar from './PreferenceNavbar'
import ManageSection from './ManageSection'
import PreferenceSetting from './settings/PreferenceSetting'
import ProfileTransfer from './settings/ProfileTransfer'

const ProfilePreferenceSection = () => {
  return (
    <>
      

       
        <PreferenceNavbar/>
          <ManageSection/>
        <PreferenceSetting/>
        <ProfileTransfer/>

      
    </>
  )
}

export default ProfilePreferenceSection
