import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {

  const nodes = useSelector((state) => state.canvas.nodes);

  return (
    <div className='results'>
      <h2>Valores de tu trazo</h2>
      {nodes.length > 1 &&
        <>
          <h3>Conexiones</h3>
          <h3>Angulos</h3>
        </>
      }
    </div>
  );
}

export default Results;
