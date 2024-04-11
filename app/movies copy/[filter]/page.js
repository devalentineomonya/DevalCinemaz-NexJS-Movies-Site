import React from 'react'

const page = ({params}) => {
  return (
    <div className='pt-[65px] bg-customDark'>
      <p>This is a dynamic raute {params.filter}</p>
    </div>
  )
}

export default page
