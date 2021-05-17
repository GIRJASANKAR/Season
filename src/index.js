
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //    console.log('in constructor');
  //   //  THIS IS THE ONLY TIME WE DO DIRECT ASSIGMENT TO this.state
  //   this.state = { lat: null, errorMessage: null };
  //   //  /* We called this.setState(and inside a object {and then property:}) */
   
  // }
  state={lat:null,errorMessage:null};

 componentDidMount(){ window.navigator.geolocation.getCurrentPosition(
  position => this.setState({ lat: position.coords.latitude }),
  err => this.setState({ errorMessage: err.message }))}

   renderContent(){
      if(this.state.errorMessage && !this.state.lat){
        return<div>Error:{this.state.errorMessage}</div>
      }
      if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
      }
      return <Loader message="Please accept a location message"/>
  }
  // React says we have to define render.
  render(){
    return(
    <div className="border red">
      {this.renderContent()}
    </div>
  );
}
}
ReactDOM.render(<App />, document.querySelector('#root'));