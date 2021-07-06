import React from 'react';
import './Dashboardinformation.css';

const DashboardInformation = ({ username }) => {
  return (
    <div className='dashboard_info_text_container'>
      <span className='dashboard_info_text_title'>
        Hello {username} .
      </span>
       
      <span className='dashboard_info_text_description'>
        You can start call by clicking on the person from the list or
        you can create or join group call.
      </span>
    </div>
  );
};

export default DashboardInformation;
