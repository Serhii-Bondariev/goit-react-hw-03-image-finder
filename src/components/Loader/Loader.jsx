import React, { Component } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={css['Spinner']}>
        <ThreeCircles
          height={100}
          width={100}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#f46aeb"
          innerCircleColor="#340ce4"
          middleCircleColor="#0ecb04"
        />
      </div>
    );
  }
}

export default Loader;
