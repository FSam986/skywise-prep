import React from 'react';

export const WeatherChartsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">8. Weather Charts and Forecasts</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Surface Analysis Charts:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Isobars - lines of equal pressure</li>
            <li>Frontal systems and their movement</li>
            <li>Pressure centers and values</li>
            <li>Station plots and weather symbols</li>
          </ul>
        </li>
        <li>
          <strong>Upper Air Charts:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Constant pressure charts (850, 700, 500 hPa)</li>
            <li>Wind direction and speed</li>
            <li>Temperature and humidity data</li>
            <li>Height contours</li>
          </ul>
        </li>
        <li>
          <strong>Aviation Weather Reports:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>METAR - current weather observation</li>
            <li>TAF - terminal aerodrome forecast</li>
            <li>SIGMET - significant meteorological information</li>
            <li>AIRMET - airmen's meteorological information</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};