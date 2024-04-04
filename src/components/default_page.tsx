import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


interface DefaultProps {
    children?: React.ReactNode
}


const Default_page: React.FC<DefaultProps> = ({children}) => {

  return (
    <>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
    </>
  )
}



export default Default_page