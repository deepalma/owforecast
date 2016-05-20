import React from 'react';

const Snapshot = function(props) {
  const { info } = props;
  const renderInfo = function(info) {
    const { main, weather } = info;
    return (
      <div className="ow-tile">
        <i className={`ow-icon wi wi-owm-${weather[0].id}`}></i>
        <span>
          <div className="max">{`${Math.floor(main.temp_max)} °C`}</div>
          <div className="min">{`${Math.floor(main.temp_min)} °C`}</div>
        </span>
      </div>
    );
  };
  return (
    <div className="ow-snapshot">
      {info ? renderInfo(info) : <div className="ow-empty-tile"></div>}
    </div>
  );
};

export default Snapshot;
