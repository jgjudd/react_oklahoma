import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
 
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitToParent = this.submitToParent.bind(this);
    this.state = {
      entry: {
        'first name': '',
        'last name': '',

      }
    };
  }

  submitToParent = (evt) => {
    evt.preventDefault();
    
    this.props.parentHandler(this.state.entry);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
  }



   render() {

    return (

      <div className="modal">
        <div className="modal-main">
            <button id="x" onClick={this.props.action}> X </button>
            <form className="column" id="submit-form" onChange={this.handleChange} onSubmit={this.SerializeArray}>
              <label>Last Name <input type="text" placeholder="Last Name..." /></label>
              <label>First Name <input type="text" placeholder="First Name" /></label>
              <label>Case File # <input type="text" placeholder="Case File # " /></label>
              <label>DA Supervisor <input type="text" placeholder="DA Supervisor" /></label>
              <label>Date Filed <input type="text" placeholder="Date Filed" /></label>
              <label>Probation Ends <input type="text" placeholder="Probation Ends" /></label>            
              <label>Reference Result <input type="text" placeholder="Reference Result" /></label>
              <label>Successful Contact? <input type="text" placeholder="Successful Contact?" /></label>
              <label>Restitution/Fees/Fines <input type="text" placeholder="Restitution/Fees/Fines" /></label> 
              <label>Failure too... <input type="text" placeholder="Failure too... " /></label> 
              <label>Notes: <input type="text" placeholder="Notes" /></label>         
              <button type="submit" id="submit-button">Add</button>  
            </form>  
            
        </div>
        <div>{this.state.entry}</div>
       
      </div>
    );

  }
}

export default Modal;