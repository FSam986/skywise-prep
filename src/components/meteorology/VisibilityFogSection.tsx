import React from 'react';

export const VisibilityFogSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">5. Visibility and Fog</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Types of Fog:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Radiation fog - forms on clear, calm nights</li>
            <li>Advection fog - forms when warm air moves over cold surface</li>
            <li>Steam fog - forms when cold air moves over warm water</li>
            <li>Frontal fog - forms near weather fronts</li>
          </ul>
        </li>
        <li>
          <strong>Visibility Measurements:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Meteorological visibility - horizontal visibility</li>
            <li>RVR (Runway Visual Range) - slant visibility for landing</li>
            <li>Flight visibility - visibility from cockpit</li>
          </ul>
        </li>
        <li>
          <strong>Factors Affecting Visibility:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Precipitation intensity and type</li>
            <li>Atmospheric pollution and haze</li>
            <li>Time of day and sun position</li>
            <li>Cloud base height and coverage</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};