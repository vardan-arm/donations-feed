import React, { useEffect, useRef } from 'react';

const SeparatorComponent = () => {
  const componentRef = useRef();

  useEffect(() => {
    // console.log('here', componentRef.current.getBoundingClientRect());
  });

  return (
    <div ref={componentRef} style={{ height: 1, border: '1px solid red' }} />
  );
};

export default SeparatorComponent;
