import data from './data'
import React from 'react'
function Card(){
    return(
        <>
            <div className='container'>
                <div className='row'>
                    {data.map((valu) => (
                        <div key={valu.name} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                              <Team
                                   image={valu.image}
                                   name={valu.name}
                                   email={valu.email}
                                   skill={valu.skill}
                               />
                        <div/>
                    ))}
                </div>
            </div> 
        </>
    )
}
export default Card