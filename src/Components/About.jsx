import React from 'react'

export default function About(props) {

  return (
    <div>
      <div className="container" style={{color : props.mode==="dark" ? "white" : "black", backgroundColor : props.mode === "dark" ? "#061f38" : "white"}}>
        <h1 className='my-4'>About Us</h1>
        <div className="accordion" id="accordionExample" >
          <div style={{color : props.mode==="dark" ? "white" : "black", backgroundColor : props.mode === "dark" ? "#061f38" : "white"}} className="accordion-item">
            <h2 className="accordion-header">
              <button style={{color : props.mode==="dark" ? "white" : "black", backgroundColor : props.mode === "dark" ? "#061f38" : "white"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Name of the developer
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Mr. Raju kumar vishwakrma </strong> Student of the silli polytechnic , silli , Ranchi and brach is Computer Science.
              </div>
            </div>
          </div>
          <div style={{color : props.mode==="dark" ? "white" : "black", backgroundColor : props.mode === "dark" ? "#061f38" : "white"}} className="accordion-item">
            <h2 className="accordion-header">
              <button style={{color : props.mode==="dark" ? "white" : "black", backgroundColor : props.mode === "dark" ? "#061f38" : "white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Add of the developer
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Currently live in Silli , Ranchi.</strong> And the permanent add of the developer is Rajhara, pandeypura , patan , palamu , Jharkhand.
              </div>
            </div>
          </div>
          <div style={{color : props.mode==="dark" ? "white" : "black", backgroundColor : props.mode === "dark" ? "#061f38" : "white"}} className="accordion-item">
            <h2 className="accordion-header">
              <button style={{color : props.mode==="dark" ? "white" : "black", backgroundColor : props.mode === "dark" ? "#061f38" : "white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Contacts of the developer.
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Contacts Details: </strong> <ul>
                  <li>Mobile No :- 9546953892</li>
                  <li>Email :- rajuvis778@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
