import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


interface DefaultProps {
    children?: React.ReactNode
}


const default_page: React.FC<DefaultProps> = ({children}) => {

  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>

    </main>
  )
}



export default default_page