import React from 'react';
import ReactDOM from 'react-dom';

const Loader=(props)=>{
    return(
      <div  className="ui segmment">
           <div className="ui active dimmer">
             <div className="ui text loader">{props.message}</div>
           </div>
        </div>
    );
}

Loader.defaultProps={
    message:'bawa prop daalna hi bhul gaye tum to..'
}

export default Loader;