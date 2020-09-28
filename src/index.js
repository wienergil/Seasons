import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    //super is a refrence to the parent constructor method
    super(props);

    //init ther state object
    this.state = {
      lat: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        this.setState({ lat: position.coords.latitude})
      },
      err => console.log(err)
    );
  }

  //React says we have to define render!
  render() {
    return <div > Latitude: {
      this.state.lat
    } < /div>;
  };
};

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);
