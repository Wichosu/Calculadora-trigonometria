import React from 'react';
import './Toolbar.scss';

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <ul className='list'>
        <li className='add'>
          <img src='/icons/Add.svg' alt='' />
        </li>
        <li className='connect'>
          <img  src='/icons/Connect.svg' alt='' />
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;
