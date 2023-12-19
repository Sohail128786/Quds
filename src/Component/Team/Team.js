import React from 'react'
import './Team.css'
import {FaFacebook,FaTwitter,FaGithub, FaLinkedin} from 'react-icons/fa';

function Team(Props){
  return (
    <>
    <div className='contaner p-4'>
       <div className="col">
            <div className='image text-center'>
              <img src={Props.image} class="card-img-top" alt="..."/>
            </div> 
            <div class="card text-center border-warning md-3">
                <div class="card-body">
                   <h5 class="card-title">{Props.name}</h5>
                   <p class="card-text">{Props.email}</p>
                   <h6 class="card-dis">{Props.skil}</h6>
                  <div className='socialIcons'>
                   <i className='icon facebook'><FaFacebook/></i> 
                   <i className='icon twitter'><FaTwitter/></i> 
                   <i className='icon github'><FaGithub/></i> 
                   <i className='icon linkedin'><FaLinkedin/></i>  
                   </div>
                </div>
        
                <div className='footer'>
                  <p>your text</p>
                </div>
            </div>
            </div>
          </div>
  
      
  </>
  )
}
export default Team