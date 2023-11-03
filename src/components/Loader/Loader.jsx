import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#5e4da9"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#f26af4"
      innerCircleColor="#ff0000"
      middleCircleColor="#b6036e"
    />
  );
};

export default Loader;
