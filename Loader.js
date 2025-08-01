import React from 'react'
import Loading from './Loading.gif'
 const Loader =()=>{
    return (
      <div className='spin'>
        <img src={Loading} alt="Loading" />
      </div>
    )
  
}

export default Loader
