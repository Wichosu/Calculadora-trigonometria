import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  add
} from '../../redux/canvasSlice';
import './Canvas.scss';

const Canvas = ({ mode }) => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const responsiveCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1;
      
      const ratio = devicePixelRatio / backingStoreRatio;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.style.width = canvas.offsetWidth + 'px';
      canvas.style.height = canvas.offsetHeight + 'px';
      ctx.scale(ratio, ratio);
    }

    responsiveCanvas();

    window.addEventListener('resize', responsiveCanvas);

    return () => {
      window.removeEventListener('resize', responsiveCanvas);
    }
  }, []);

  // const draw = (e) => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   const rect = canvas.getBoundingClientRect();

  //   ctx.fillStyle = '#000000';
  //   ctx.beginPath();
  //   ctx.arc(e.pageX - rect.x, e.pageY - rect.y, 8, 0, 2 * Math.PI);
  //   ctx.fill()
  // }

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} onClick={(e) => dispatch(add({canvasRef, e}))} />
    </div>
  );
}

export default Canvas;
