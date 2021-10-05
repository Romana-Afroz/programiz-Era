import React from 'react'
const AllServices=(props) => {
    const { img, description, Details,  courseTitel, courseInstructor, courseFee, catagory}=props.service 
    return(
                
 <div className="album py-5 bg-light">
  <div>
      <div>
          
        <div className="card shadow-sm">
          <img className=" card-img-top" src={img} alt="..."/>

          <div className="card-body">
              <h3>{courseTitel}</h3>
              <h5>Instructor:{courseInstructor} </h5>
              <h5>Course Fee: {courseFee}</h5>
              <h5>Catogory:{catagory}</h5>
              <h5> </h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
        
           
      </div>
      </div>
     </div>
     
       
    );
    
    };
export default AllServices;
