import React from 'react';

const getSeason = (lat, month) => {

  if(month >2 && month <9){
    return  lat > 0 ? "summer" : "winter";
  }else{
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = (props) =>{
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "summer" ? "Lets hit the beach" : "Brr its chilly";
  const icon = season === "winter" ? "snowflake icon" : "sun icon";
  console.log(icon);
  return(
    <div>
      <i className= {icon} />
      {console.log({icon})}
      <h1>{text}</h1>
      <i className= {icon} />
    </div>
  )
}

export default SeasonDisplay;
