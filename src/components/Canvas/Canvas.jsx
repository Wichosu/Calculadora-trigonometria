import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  add,
  connect
} from '../../redux/canvasSlice';
import './Canvas.scss';

const Canvas = ({ mode }) => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  const handleMode = (e) => {
    switch(mode){
      case 'add':
        dispatch(add(createNode(e)));
        break;
      case 'connect':
        dispatch(connect({canvas: canvasRef.current, e}));
        break;
    }
  }

  const drawNode = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();

    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(e.pageX - rect.x, e.pageY - rect.y, 8, 0, 2 * Math.PI);
    ctx.fill()
  }
  
  const createNode = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();

    drawNode(e);

    return {
      x: e.pageX - rect.x,
      y: e.pageY - rect.y
    }
  }

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

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} onClick={handleMode} />
    </div>
  );
}

export default Canvas;
