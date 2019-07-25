import React from 'react';

const Picture = (props) => {

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

export default Picture;
