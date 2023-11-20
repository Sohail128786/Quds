import React from 'react'
import '../Cards/Cards.css' 
const Service = () => {
  return (
    <div className="contaner p-5">
       <div><h1>CHECK OUR SERVICES</h1></div>
       
        <div className='card-group '>
           <div className='row '>
           {/* 1st Card */}
               <div className='col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate'>
                  <div className="card text-center border-warning md-3">
                       <div className="card-body">
                          <i class="bi bi-dribbble"></i>
                          <h5 className="card-title">Peer Review Submission</h5>
                          <p className="card-text">Elevate your research to new heights with our peer review submission service, where our team of experts provide insightful feedback, rigorous evaluation, and unparalleled support to help your work stand out in the competitive academic landscape</p>
                       </div>
                   </div>
               </div>
               {/* 2nd Card */}
               <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate'>
                  <div className="card text-center border-warning md-3">
                       <div className="card-body">
                          <i className="bi bi-file-earmark-text"></i>
                          <h5 className="card-title">Substantive Editing Service</h5>
                          <p className="card-text">Transform your writing into a masterpiece with our substantive editing service, where our skilled editors delve deep into your work, refining your ideas, enhancing your language, and elevating your message to captivate and engage your readers like never before.</p>
                       </div>
                   </div>
               </div>

               {/* 3rd Card */}
               <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 aos-init aos-animate'>
                  <div className="card text-center border-warning md-3">
                       <div className="card-body">
                          <i className="bi bi-speedometer2"></i>
                          <h5 className="card-title">Content writing</h5>
                          <p className="card-text">Unleash the power of research with our top-notch research writing services, where our team of experts provide in-depth analysis, insightful perspectives, and exceptional writing skills to help you make breakthrough discoveries, establish your authority, and advance your academic or professional career</p>
                       </div>
                   </div>
               </div>
            
           {/* 4th Card */}
               <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate'>
                  <div className="card text-center border-warning mb-3">
                       <div className="card-body">
                          <i className="bi bi-display"></i>
                          <h5 className="card-title">Journal Submission Assistance</h5><p className="card-text">Unlock the doors to top-tier journals with our expert journal submission assistance services, where our team of experienced professionals provide comprehensive support, strategic guidance, and meticulous attention to detail to help you navigate the submission process with confidence and ease</p>
                       </div>
                   </div>
               </div>

               {/* 5th Card */}
               <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate'>
                  <div className="card text-center border-warning md-3">
                       <div className="card-body">
                          <i className="bx bx-arch"></i>
                          <h5 className="card-title">Manuscript Foramting</h5>
                          <p className="card-text">Manuscript Formatting and Artwork Editing provides researchers a manuscript fine-tuning service that fixes every flaw in a manuscript which helps your research for effortless journal submission</p>
                       </div>
                   </div>
               </div>

               {/* 6th Card */}
               <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate'>
                  <div className="card text-center border-warning md-3">
                       <div className="card-body">
                          <i className="bi bi-globe-americas"></i>
                          <h5 className="card-title">Editorial Contact Support</h5>
                          <p className="card-text">We offer a collaborative process that includes support from editorial team for both and pre and post submission. Trust us to handle your manuscript submission and increase your acceptance odds by 30%.</p>
                       </div>
                   </div>
               </div>
         
               </div>   
        </div>
    </div>
  )
}

export default Service 
