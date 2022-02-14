import React from 'react';
import felix from './felix.jpg';

const AnnualReport = () => {
return (
  <div class="main-body"
  style={{
    justifyContent: 'Left',
    alignItems: 'Right',
    height: '100vh',
    margin: '10px'
  }}
  >
  <h2>Annual Report</h2>
  <p>Report on this project are projected below: </p>
  <ol>
     <li> Create a sample project </li>
     <li> Hosting it on Amplify </li>
     <li>  Showing it off lol </li>
  </ol>
  <p>Report on cats being cute: <b>Always</b></p>
  <img  position='flex' src={felix} alt="Felix" width="200px" />
  </div>
);
};

export default AnnualReport;
