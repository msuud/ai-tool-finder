import React from 'react'

const Blog_card = () => {
  return (
   <section>
   <div className="card text-white m-4">
           <img src="" alt="..." className="card-img-top"/>
           <div className="card-body" style={{
           background: "linear-gradient(to right, #00093c, #2d0b00)",
           padding: "7px",
           borderRadius: "10px",
         }}>
             <h5 className="card-title">item name</h5>
             <p className="card-text">
               item descprtion
               
             </p>
             <a href="" className="btn btn-primary" style={{backgroundColor: 'magenta'}}>
               Read Blog
             </a>
           </div>
         </div>
 </section>
  )
}

export default Blog_card
