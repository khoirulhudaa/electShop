import React, { useState } from 'react'
import { ContentHomepage, Footer, Hero, Navbar } from '../../layout'

const Homepage: React.FC = () => {

  const [active, setActive] = useState<any>(false)

  const handleActiveSidebare = () => {
    setActive(!active)
  }

  return (
    <>
      <Navbar onClick={handleActiveSidebare} active={active} />
      <Hero />
      <ContentHomepage />
      <Footer />
    </>
  )
}

export default Homepage
