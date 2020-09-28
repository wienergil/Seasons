import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
class App extends React.Component {

  state = {lat: null, errorMessage:""};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  //React says we have to define render!
  render() {
    if (this.state.lat != null) {
      return <SeasonDisplay
      lat={this.state.lat}
     />

    }else if (this.state.errorMessage != "") {
      return <div>Error: {this.state.errorMessage} </div>

    }else {
      return <div>Loading!</div>
    }
  }
};

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);
