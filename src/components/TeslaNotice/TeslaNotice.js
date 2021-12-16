import React from 'react';

import "./TeslaNotice.css";


const TeslaNotice = () => {
  return (
    <div className="tesla-battery__notice">
      <p>
        The actual amount of range that experience will vary based on your particular conditions. See how particular
        use conditions may affect your range in our simulation model.
      </p>
      <p>
        Vehicle range may vary depending on the vehicle configuration, battery age condition, driving style and
        operating, environmental and climate conditions.
      </p>
    </div>
  );
};

export default TeslaNotice;
