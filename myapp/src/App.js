import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.files[0].name
      }`
    );
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type='file' ref={input => {
            this.fileInput = input;
          }} 
          />
        </label>
        <br/>
        <button type="submit">
            Submit
        </button>
      </form>
    );
  }
}

export default App;
