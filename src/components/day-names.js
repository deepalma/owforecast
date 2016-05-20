import React from 'react';

const DayNames = function(props) {
  const { names } = props;
  return (
    <div className="ow-day-names">
      <ul>
        {names.map(name => <li key={name} className="ow-day-name">{name}</li>)}
      </ul>
    </div>
  );
};

export default DayNames;
