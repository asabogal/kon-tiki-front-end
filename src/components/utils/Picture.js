import React from 'react';

export const Thumbnail = (props) => {

  return (
    <div className="picture-cover"
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
        background: `url(${props.url})`
      }}
    >
    </div>
  );
};

export const Picture = (props) => {

  return (
    <img className="picture-holder" src={props.image}/>
  );
};

