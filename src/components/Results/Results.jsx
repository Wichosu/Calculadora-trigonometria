import React from 'react';
import { useSelector } from 'react-redux';
import './Results.scss';

const Results = () => {

  const nodes = useSelector((state) => state.canvas.nodes);
  const connections = useSelector((state) => state.canvas.connections);
  console.log(connections)

  return (
    <div className='results'>
      {connections.length > 0 &&
        <>
        <h2>Valores de tu trazo</h2>
          <h3>Lados</h3>
          <div className='sides'>
            {
              connections.map((connection, index) => (
                <div key={index} className='container'>
                  <h4 key={index}>
                    {connection[0].name} - {connection[1].name}
                  </h4>
                  <input type='text' />
                </div>
              ))
            }
          </div>
          <h3>Angulos</h3>
          <button>Actualizar Valores</button>
        </>
      }
    </div>
  );
}

export default Results;
