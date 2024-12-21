import React from 'react';

export const PressureSystemsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">2. Advanced Pressure Systems</h2>
      <h3 className="text-xl mb-3">Pressure Calculations and Systems:</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Pressure Measurements:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>QNH - Pressure adjusted to sea level</li>
            <li>QFE - Actual pressure at aerodrome level</li>
            <li>QFF - Sea level pressure at station location</li>
            <li>Standard pressure - 1013.25 hPa / 29.92 inHg</li>
          </ul>
        </li>
        <li>
          <strong>Pressure Calculations:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Pressure decreases approximately 1 hPa per 30 feet</li>
            <li>Pressure altitude = indicated altitude when set to 1013.25</li>
            <li>Density altitude = pressure altitude corrected for temperature</li>
          </ul>
        </li>
        <li>
          <strong>Pressure Systems:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>High pressure (anticyclones) - clockwise flow (NH)</li>
            <li>Low pressure (depressions) - counterclockwise flow (NH)</li>
            <li>Col - neutral area between pressure systems</li>
            <li>Trough - elongated area of low pressure</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};