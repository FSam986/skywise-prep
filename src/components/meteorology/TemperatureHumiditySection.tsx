import React from 'react';

export const TemperatureHumiditySection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">3. Temperature and Humidity</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Temperature Relationships:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Dew point - temperature at which condensation occurs</li>
            <li>Frost point - temperature at which sublimation occurs</li>
            <li>Relative humidity - percentage of moisture content</li>
            <li>Absolute humidity - actual water vapor content</li>
          </ul>
        </li>
        <li>
          <strong>Lapse Rates:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>DALR (Dry Adiabatic Lapse Rate) - 3°C/1000ft</li>
            <li>SALR (Saturated Adiabatic Lapse Rate) - 1.5°C/1000ft</li>
            <li>ELR (Environmental Lapse Rate) - actual measured rate</li>
          </ul>
        </li>
        <li>
          <strong>Temperature Inversions:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Surface inversion - caused by ground cooling</li>
            <li>Upper air inversion - caused by subsidence</li>
            <li>Frontal inversion - associated with weather fronts</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};