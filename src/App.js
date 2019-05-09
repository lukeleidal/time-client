import React, {Component} from 'react';
import './App.css';

import axios from "axios";

class App extends Component {

  constructor() {
      super();
      this.state = {
          timeObj: {}
      };
      this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
        this.getTheTime()
    }

    componentDidMount() {
        this.getTheTime();
    }

    render() {
        return (
            <div className="App-header">
                <button className={'myButton'} onClick={this.handleClick}>Get Current Time</button>
                { <div>{this.state.timeObj.currentTime}</div>}
            </div>
        )
    }

    getTheTime() {
        axios.get("http://localhost:8080/api/currentTime")
            .then(res => {
                const timeObj = res.data;
                this.setState({ timeObj });
            })
            .catch(error => console.log(error));
    }
}

export default App;
