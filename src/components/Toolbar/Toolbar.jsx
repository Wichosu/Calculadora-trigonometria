import React from 'react';
import './Toolbar.scss';

const Toolbar = ({ getMode }) => {
  return (
    <div className='toolbar'>
      <ul className='list'>
        <li className='add' onClick={() => getMode('add')}>
          <img src='/icons/Add.svg' alt='' />
        </li>
        <li className='connect' onClick={() => getMode('connect')}>
          <img  src='/icons/Connect.svg' alt='' />
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;
