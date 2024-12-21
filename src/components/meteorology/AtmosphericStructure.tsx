import React from 'react';

export const AtmosphericStructure = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">1. Advanced Atmospheric Structure</h2>
      <h3 className="text-xl mb-3">Composition and Layers:</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Atmospheric Composition:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Nitrogen (78%) - Primary component, inert gas</li>
            <li>Oxygen (21%) - Essential for combustion and life</li>
            <li>Other gases (1%) - Argon, CO2, water vapor, etc.</li>
          </ul>
        </li>
        <li>
          <strong>Troposphere Characteristics:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Height varies from 8km (poles) to 18km (equator)</li>
            <li>Temperature decreases with height (-2°C/1000ft)</li>
            <li>Contains 75% of atmospheric mass</li>
            <li>Most weather phenomena occur here</li>
          </ul>
        </li>
        <li>
          <strong>Tropopause:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Boundary between troposphere and stratosphere</li>
            <li>Temperature remains constant with height</li>
            <li>Height varies with latitude and season</li>
          </ul>
        </li>
        <li>
          <strong>Stratosphere:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Extends to about 50km altitude</li>
            <li>Temperature increases with height</li>
            <li>Contains ozone layer</li>
            <li>Very stable, minimal turbulence</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};