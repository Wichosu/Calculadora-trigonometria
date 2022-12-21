import React, { useRef, useEffect } from 'react';
import './Canvas.scss';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 100, 1000);
  }, []);

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Canvas;
