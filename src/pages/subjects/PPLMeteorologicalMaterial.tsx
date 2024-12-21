import { Cloud, Sun, Wind, Thermometer, Gauge, Droplets, CloudRain, CloudLightning } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/BackButton";

const topics = [
  {
    title: "The Atmosphere",
    description: "Composition, structure, and layers of the atmosphere",
    icon: Cloud,
  },
  {
    title: "Pressure",
    description: "Atmospheric pressure, QNH, QFE, and pressure systems",
    icon: Gauge,
  },
  {
    title: "Density",
    description: "Air density variations and effects on aircraft performance",
    icon: Wind,
  },
  {
    title: "Temperature",
    description: "Temperature variations, lapse rates, and inversions",
    icon: Thermometer,
  },
  {
    title: "Humidity",
    description: "Relative humidity, dew point, and effects on weather",
    icon: Droplets,
  },
  {
    title: "Adiabatics and Stability",
    description: "Atmospheric stability, DALR, SALR, and ELR",
    icon: Sun,
  },
  {
    title: "Turbulence",
    description: "Types of turbulence and their causes",
    icon: Wind,
  },
  {
    title: "Clouds and Precipitation",
    description: "Cloud types, formation, and associated weather",
    icon: CloudRain,
  },
  {
    title: "Winds",
    description: "Wind patterns, jet streams, and local effects",
    icon: CloudLightning,
  }
];

const PPLMeteorologicalMaterial = () => {
  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">PPL Meteorology Study Material</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card 
              key={topic.title} 
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <topic.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-center">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PPLMeteorologicalMaterial;