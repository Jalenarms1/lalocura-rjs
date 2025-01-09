import React, { useEffect } from 'react'

const MenuSection = ({sectionType}) => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div>
      <p>Menu section</p>
    </div>
  )
}

export default MenuSection
