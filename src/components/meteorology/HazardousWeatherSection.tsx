import React from 'react';

export const HazardousWeatherSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">10. Hazardous Weather</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Thunderstorm Hazards:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Severe turbulence and wind shear</li>
            <li>Lightning strikes and static electricity</li>
            <li>Heavy precipitation and hail</li>
            <li>Icing conditions above freezing level</li>
          </ul>
        </li>
        <li>
          <strong>Turbulence Types:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Mechanical - terrain-induced</li>
            <li>Thermal - heat-induced vertical motion</li>
            <li>Wake turbulence - aircraft-induced</li>
            <li>Clear air turbulence (CAT)</li>
          </ul>
        </li>
        <li>
          <strong>Mountain Wave Phenomena:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Formation conditions and characteristics</li>
            <li>Associated cloud formations</li>
            <li>Turbulence intensity and location</li>
            <li>Avoidance techniques</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};