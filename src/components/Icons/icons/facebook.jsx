import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 95.334 95.334',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M10.6484 12.2339H7.71875V20.9839H3.8125V12.2339H0.648438V8.60107H3.8125V5.8667C3.8125 4.82503 4.00781 3.93962 4.39844 3.21045C4.78906 2.48128 5.33594 1.93441 6.03906 1.56982C6.76823 1.1792 7.60156 0.983887 8.53906 0.983887C8.95573 0.983887 9.39844 1.00993 9.86719 1.06201C10.3359 1.08805 10.7005 1.12712 10.9609 1.1792L11.3516 1.21826V4.3042H9.78906C9.0599 4.3042 8.52604 4.49951 8.1875 4.89014C7.875 5.25472 7.71875 5.71045 7.71875 6.25732V8.60107H11.1953L10.6484 12.2339Z"
      fill={fill}
    />
  </svg>
);

export default SVG;