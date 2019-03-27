import React, { Component } from 'react';
import Modal from './modalComponent/Modal';
import './App.css';

class App extends Component {

     constructor() {
      super();

      this.closeModalHandler = this.closeModalHandler.bind(this);
      this.handleData = this.handleData.bind(this);

      this.state = {
        isShowing: false,
        fakeDB: []
      }

    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }
    closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
    }

   
    handleData = (data) => {
      this.setState({
        fakeDB: data
      });
    }


  render() {

    const headings = [
      'Last Name',
      'First Name',
      'Case File #',
      'DA Supervisor',
      'Date Filed',
      'Probation Ends',
      'Reference Result',
      'Successful Contact?',
      'Restitution/Fees/Fines',
      'Failure to...',
      'Notes:'
    ];



    return (
      <div className="App">

          <header className="App-header">OK Header</header>
          <button onClick={this.openModalHandler}>Add New Entry</button>
          <button>Clear Entries</button>
          <button>Export File</button>
          <div>
           { this.state.isShowing ? <Modal action={this.closeModalHandler} parentHandler={this.handleData}>test it out</Modal> : null }
          </div>
          
          <table id="table">
          {headings.map( (header) => <th className="table-header">{header}</th>)}
         
          </table>
          {this.state.fakeDB}
          
          

         
      </div>
    );
  }
}

export default App;
