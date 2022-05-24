import React from 'react';
import warehouse from '../../icons/warehouse.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const ToolsBanner = ({date,setDate}) => {
  
  return (
    <>
      {/* <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={warehouse} alt='' />
        </div>
        <div>
          <p>Available Delivery Date</p>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
           
        </div>
      </div>
     
    </div> */}
    </>
  );
};

export default ToolsBanner;