import React from 'react';
import Business from './Business';
import './BusinessList.css';

function BusinessList(){
  return (
    <div className="container">
      <div className="cards-list">
        <ul>
          <Business />
          <Business />
        </ul>
      </div>
    </div>
  )
}
export default BusinessList;
