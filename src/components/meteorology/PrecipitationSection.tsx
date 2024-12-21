import React from 'react';

export const PrecipitationSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">4. Cloud Formation and Precipitation</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Cloud Types:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>High clouds (above 20,000ft) - Cirrus, Cirrostratus, Cirrocumulus</li>
            <li>Medium clouds (6,500-20,000ft) - Altostratus, Altocumulus</li>
            <li>Low clouds (below 6,500ft) - Stratus, Stratocumulus, Nimbostratus</li>
            <li>Vertical development - Cumulus, Cumulonimbus</li>
          </ul>
        </li>
        <li>
          <strong>Precipitation Types:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Rain - liquid precipitation {'>'}0.5mm</li>
            <li>Drizzle - liquid precipitation {'<'}0.5mm</li>
            <li>Snow - frozen precipitation in crystalline form</li>
            <li>Hail - frozen precipitation in ball or irregular lumps</li>
          </ul>
        </li>
        <li>
          <strong>Thunderstorm Development:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Cumulus stage - strong updrafts</li>
            <li>Mature stage - precipitation begins</li>
            <li>Dissipating stage - downdrafts dominate</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};