import React from 'react';
import Snapshot from './snapshot';

const WeatherInfo = function(props) {
  const { forecast } = props;
  const days = Object.keys(forecast);
  const renderRow = (snapshots, index) => {
    return (
      <div className="ow-day-row" key={index}>
        {snapshots.map((item, index) => <Snapshot key={index} info={item} />)}
      </div>
    );
  };
  return (
    <div className="ow-weather-info">
      {days.map((day, index) => renderRow(forecast[day], index))}
    </div>
  );
};

export default WeatherInfo;
