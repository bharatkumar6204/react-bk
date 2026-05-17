import React from 'react'
import Navbar from './Navbar'
import Page1Contant from './page1Contant'



const Section1 = (props) => {
  console.log(props.users);
  
  return (
    <div className='h-screen w-full '>
    <Navbar/>
    <Page1Contant users={props.users} />
    

    </div>
  )
}

export default Section1