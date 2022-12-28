import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  add,
  connect
} from '../../redux/canvasSlice';
import './Canvas.scss';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //todo add the entire alphabet

const Canvas = ({ mode }) => {
  const canvasRef = useRef(null);
  const nodes = useSelector((state) => state.canvas.nodes);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);

  const handleMode = (e) => {
    switch(mode){
      case 'add':
        dispatch(add(createNode(e)));
        break;
      case 'connect':
        connectNodes(e);
        break;
    }
  }

  const drawNode = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.pageX - rect.x;
    const y = e.pageY - rect.y;

    ctx.fillStyle = '#333333';
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.font = '16px serif';
    ctx.fillText(letters[nodes.length], x - 25, y);// todo calculate the values according to the device width
  }

  const connectNodes = (e) => {
    if(selected.length > 1) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(selected[0].x, selected[0].y);
      ctx.lineTo(selected[1].x, selected[1].y);
      ctx.stroke();
      setSelected([]);
    } else {
      //filtrar selected para evitar nodos repetidos
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = e.pageX - rect.x;
      const mouseY = e.pageY - rect.y;
      nodes.filter((node => {
        const colliderXl = node.x - 8;
        const colliderXr = node.x + 8;
        const colliderYt = node.y + 8;
        const colliderYb = node.y - 8;
        
        if(mouseX <= colliderXr 
        && mouseX >= colliderXl
        && mouseY <= colliderYt 
        && mouseY >= colliderYb) {
          setSelected([...selected, node])
        }
      }));
    }
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
  }, [])

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

    if(selected.length > 1){
      ctx.beginPath();
      ctx.moveTo(selected[0].x, selected[0].y);
      ctx.lineTo(selected[1].x, selected[1].y);
      ctx.stroke();
      setSelected([]);
    }

    window.addEventListener('resize', responsiveCanvas);

    return () => {
      window.removeEventListener('resize', responsiveCanvas);
    }
  }, [selected]);

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} onClick={handleMode} />
    </div>
  );
}

export default Canvas;
