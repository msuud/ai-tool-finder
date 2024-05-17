import React from 'react'
import Tool_card from './Tool_card'
import { data1 } from '../../data/data1'

const Tool_card_section = () => {

   const arr = [1,1,1,1,1,1,1,1,1,1,1,1]

  return (
    <div className='container p-5'>
      <div className='flex justify-content-center flex-column text-center'>
      <div className='h3 text-white'>Featured AI's</div>
      <div className="row">
      {
                /*  This maps each array item to a div adds
                the style declared above and return it */
                data1.map((item) => (
                     console.log(item),
                    <div className='col-sm-3 m-4'>
                        <Tool_card item={item}/>
                    </div>
                ))
            }
      </div>
      </div>
    </div>
  )
}

export default Tool_card_section
