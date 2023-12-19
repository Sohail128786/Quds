import data from './data'
import React from 'react'
import Team from './Team'
import './Team.css'
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
                                   skil={valu.skil}
                               />
                        </div>
                      ))}
                </div>
            </div> 
        </>
    );
}
export default Card;