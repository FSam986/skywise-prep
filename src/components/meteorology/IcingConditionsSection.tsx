import React from 'react';

export const IcingConditionsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">9. Icing Conditions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Types of Airframe Icing:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Clear ice - transparent, heavy, hard to remove</li>
            <li>Rime ice - opaque, rough, brittle</li>
            <li>Mixed ice - combination of clear and rime</li>
            <li>Frost - crystalline deposit</li>
          </ul>
        </li>
        <li>
          <strong>Engine Icing:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Carburetor icing - temperature/humidity dependent</li>
            <li>Impact ice - direct contact with supercooled water</li>
            <li>Inlet icing - affects engine performance</li>
          </ul>
        </li>
        <li>
          <strong>Anti-icing Systems:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Thermal systems - hot air or electrical heating</li>
            <li>Chemical systems - fluid application</li>
            <li>Mechanical systems - boots and wipers</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};