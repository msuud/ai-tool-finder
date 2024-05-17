import React from 'react'

const Tool_card = ({item}) => {
  return (
    <section>
      <div className="card text-white">
              <img src={item.image} alt="..." className="card-img-top"/>
              <div className="card-body" style={{
              background: "linear-gradient(to right, #00093c, #2d0b00)",
              padding: "7px",
              borderRadius: "10px",
            }}>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.descprtion}
                  
                </p>
                <a href={item.link} className="btn btn-primary" style={{backgroundColor: 'magenta'}}>
                  AI link
                </a>
              </div>
            </div>
    </section>
  )
}

export default Tool_card
