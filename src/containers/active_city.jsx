import React from 'react';

const ActiveCity = (props) => {
  return (
    <div className="active-city">
      <h3>{props.city.name}</h3>
      {props.city.address}
      <img src={`https://kitt.lewagon.com/placeholder/cities/:${props.city.slug}`} alt="city" />
    </div>
  );
};

export default ActiveCity;
