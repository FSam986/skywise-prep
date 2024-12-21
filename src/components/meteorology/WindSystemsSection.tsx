import React from 'react';

export const WindSystemsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">6. Wind Systems</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Global Circulation:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Hadley cell (0-30° latitude)</li>
            <li>Ferrel cell (30-60° latitude)</li>
            <li>Polar cell (60-90° latitude)</li>
            <li>Effect of Coriolis force</li>
          </ul>
        </li>
        <li>
          <strong>Local Winds:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Sea breeze - daytime onshore flow</li>
            <li>Land breeze - nighttime offshore flow</li>
            <li>Valley breeze - upslope daytime flow</li>
            <li>Mountain breeze - downslope nighttime flow</li>
          </ul>
        </li>
        <li>
          <strong>Wind Shear:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Vertical wind shear - change with height</li>
            <li>Horizontal wind shear - change with distance</li>
            <li>Low-level wind shear - below 2000ft</li>
            <li>Microburst - intense downdraft</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};