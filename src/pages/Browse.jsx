import React from 'react'
import BrowseSection from '../components/BrowseSection'

const Browse = ({title, profileButton, addButton}) => {
  console.log(title)
  return (
    <>
      <BrowseSection title={title} profileButton={profileButton} addButton={addButton}/>
    </>
  )
}

export default Browse
