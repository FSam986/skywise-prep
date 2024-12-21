import React from 'react';

export const AirMassesFrontsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">7. Air Masses and Fronts</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Air Mass Classification:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Maritime Tropical (mT) - warm and moist</li>
            <li>Continental Tropical (cT) - hot and dry</li>
            <li>Maritime Polar (mP) - cool and moist</li>
            <li>Continental Polar (cP) - cold and dry</li>
          </ul>
        </li>
        <li>
          <strong>Frontal Types:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Warm front - warm air replacing cold air</li>
            <li>Cold front - cold air replacing warm air</li>
            <li>Occluded front - cold front overtaking warm front</li>
            <li>Stationary front - no movement of air masses</li>
          </ul>
        </li>
        <li>
          <strong>Associated Weather:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Warm front - widespread precipitation, poor visibility</li>
            <li>Cold front - heavy precipitation, thunderstorms</li>
            <li>Occluded front - mixed characteristics</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};