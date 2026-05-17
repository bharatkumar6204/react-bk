import React from 'react'
import LeftContant from './LeftContant'
import RightContant from './RightContant'

const Page1Contant = (props) => {
  
  
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh] px-18  '>
        <LeftContant/>
        <RightContant users={props.users}/>

    </div>
  )
}

export default Page1Contant