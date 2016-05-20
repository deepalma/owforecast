import React from 'react';

const DayHours = function() {
  const hours = ['Midnight', '3am', '6am', '9am', 'Noon', '3pm', '6pm', '9pm'];
  return (
    <ul className="ow-day-hours">
      {hours.map((hour, i) => <li key={i} className="ow-day-hour">{hour}</li>)}
    </ul>
  );
};

export default DayHours;
