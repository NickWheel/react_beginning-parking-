import React from 'react';

export default function(props) {
  // existing props: pX, pY, lotX, lotY
  const { pX, pY, lotX, lotY } = props;
  const size = { 
    width: pX,
    height: pY,
    position: 'relative'
  }
  let xLotsQuantity = pX / lotX; 
  let yLotsQuantity = pY / lotY
  
  return (
    <div class='parking' style={size}>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 0, top: 0}}></div>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 0, top: 50}}></div>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 0, top: 100}}></div>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 0, top: 150}}></div>

      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 70, top: 0}}></div>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 70, top: 50}}></div>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 70, top: 100}}></div>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotX, height: lotY, left: 70, top: 150}}></div>

      <div style={{backgroundColor: 'green', position: 'absolute', width: lotY, height: lotX, left: 140, top: 130}}>rotated</div>
      <div style={{backgroundColor: 'green', position: 'absolute', width: lotY, height: lotX, left: 140, top: 60}}>rotated</div>
    </div>
  );
}