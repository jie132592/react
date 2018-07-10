import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true
    }
    this.handClick = this.handClick.bind(this)
  }
  handClick(e){
    this.setState({
      liked: !this.state.liked
    })
  }
  render() {
    var txt = this.state.liked ? '喜欢' : '不喜欢';
    return (
      <div>
        <p>{txt}</p>
          <button onClick={this.handClick}>点我</button>
      </div>
    )
  }
}

export default App;
