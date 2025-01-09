import React, { useEffect } from 'react'

const MenuSection = () => {

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
