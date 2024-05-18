import React from 'react'
import Blog_card from './Blog_card'

const Blog_page = () => {
  return (
    <div className='container-fluid'>
      <div className='container-fluid'>
         <div className='row'>
            <div className="col"><Blog_card /></div>
            <div className="col">
               <div className="flex flex-column">
                  <div ><Blog_card /></div>
                  <div ><Blog_card /></div>
                  <div ><Blog_card /></div>
               </div>
            </div>
         </div>
      </div>
      <div className='container-fluid p-3 mt-2 text-center'>
         <button className='btn btn-primary'>View All Trending Blogs</button>
      </div>
      <div className='container-fluid p-3 text-center'>
         <div className='container-fluid mt-5 text-center'>
            <p className='h1 text-white'>Featured Blogs</p>
         </div>
         
         <div className='container-fluid text-center'>
            <div className='row '>
               <div className='col-sm-3'><Blog_card /></div>
               <div className='col-sm-3'><Blog_card /></div>
               <div className='col-sm-3'><Blog_card /></div>
               <div className='col-sm-3'><Blog_card /></div>
               <div className='col-sm-3'><Blog_card /></div>
               <div className='col-sm-3'><Blog_card /></div>
               <div className='col-sm-3'><Blog_card /></div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Blog_page
