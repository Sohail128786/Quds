import React from 'react'
import "./contact.css";
import User from '../user.svg'
const Contact = () => {
  return (
    <>
    <div className='contaner p-5'>
        <div className='row'>
             <div className='col'>
                <div className='f-row'>
                   Submit Manuscript
                </div>    
            </div>
        </div>
    <from>    
        <div className='row'>
            <div className='col'>
                <div className='details'>
                   <img className='img' src={User} alt='Editor' width={22} height={22}/>
                   <h2>Auther Details:</h2>
                </div>   
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label >Auther First Name<sup>*</sup></label>
                      <input type="text" className="form-control" />             
            </div>
            <div className='col'>
                <label >Auther Last Name<sup>*</sup></label>
                      <input type="text" className="form-control" />
            </div>
            <div className='col'>
                <label >Auther Email<sup>*</sup></label>
                      <input type="email" className="form-control" />
            </div>
        </div>
        <div className='row'>
           <div className='col'>
                <label >Alterrnate Email<sup>*</sup></label>
                      <input type="email" className="form-control" />
            </div>
            <div className='col'>
                <label >Phone Number<sup>*</sup></label>
                      <input type="text" className="form-control" />
            </div>
            <div className='col'>
                <label >Choose Your Region<sup>*</sup></label>
                      <select  className="form-select">
                           <option>..Select Your Region--</option>
                           <option>..Select Your Region</option>
                           <option>..Select Your Region</option>
                      </select>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <div className='details'>
                    <i class="bi bi-file-earmark-richtext-fill"></i>
                    <h2>Manuscript Details:</h2>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label >Title<sup>*</sup></label>
                      <input type="text" class="form-control" />
            </div>
            <div className='col'>
                <label>Article Type<sup>*</sup></label>
                    <select  className="form-select">
                    <option>..Select Article Type </option>
                    <option>..Select Article Type </option>
                    <option>..Select Article Type </option>
                </select>
            </div>  
        </div>     
        <div className='row'>    
            <div className='col'>
                <label>Issue Type<sup>*</sup></label>
                    <select  className="form-select">
                    <option>..Select Issue Type </option>
                    <option>..Select Issue Type </option>
                    <option>..Select Issue Type </option>
                    </select>
            </div>
            <div className='col'>
                      <label >Title<sup>*</sup></label>
                      <input type="text" class="form-control" />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
            <label>Classification <sup>(optional)</sup></label>
                    <select  className="form-select">
                    <option>..Select Classification--</option>
                    <option>..Select Issue Type </option>
                    <option>..Select Issue Type </option>
                    </select>
            </div>
            <div className='col'>
                <label >Suggest Classification<span> [if Classification is]</span></label>
                      <input type="text" class="form-control" />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label >Same thing*</label>
                      <textarea className="form-control" />
            </div>
            <div className='col'>
                <label >Key Word*</label>
                      <textarea className="form-control"/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <input type="file" className="form-control"/>
            </div>
                <div className='col'>
                <label class="btn btn-danger" >Add More +</label>
                </div>
            </div>   
            <div className='col'>
            </div>
        <div className='row'>
            <div className='col'>
              <p><b>Note: </b> If you want to uplud more file please chlick on Add More button</p>
            </div>
            <div className='col'>
            </div>
            <div className='col'>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <button onClick={{}} className='btn btn-warning'>Submit Manuscript</button>
            </div>
        </div>
        </from>
    </div>
    </>
  )
}

export default Contact
// style="width: 18rem;"