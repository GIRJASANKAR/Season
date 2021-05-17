import React from 'react';
import './SeasonDisplay.css';


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  }
  else {
    return lat > 0 ? 'Winter' : 'Summer';
  }

};

const SeasonDisplay = (props) => {

  const season = getSeason(props.lat, new Date().getMonth());
 
  const text=(season=='winter')?"burr,it's chilly":"Let's hit the beach!";
  const iconName=(season=='winter')?"snowflake":"sun";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}/>
    </div>
    );  
}


export default SeasonDisplay;

/* <i class="horizontally flipped snowflake icon"></i>
<i class="horizontally flipped sun icon"></i> */