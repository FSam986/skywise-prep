import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const ATPLMeteorologicalMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">ATPL Meteorology</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Professional meteorological knowledge for Airline Transport Pilot License
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">1. Advanced Temperature Analysis</h2>
                    <h3 className="text-xl mb-2">ISA Temperature Formula:</h3>
                    <pre className="bg-gray-100 p-2 rounded">
                      ISA Temp = 15 - (2 × altitude in thousands of feet)
                    </pre>
                    <h3 className="text-xl mt-4 mb-2">Temperature Inversions:</h3>
                    <p>Stable layers where temperature increases with altitude</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">2. Winds and Circulation</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Coriolis Effect: Deflects winds to the right in Northern Hemisphere</li>
                      <li>Geostrophic Winds: Balance between Coriolis force and pressure gradient</li>
                      <li>Jet Streams: High-altitude winds at the tropopause</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">3. Advanced Visibility Concepts</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Runway Visual Range (RVR)</li>
                      <li>Causes of low visibility: Fog, haze, precipitation</li>
                      <li>Impact on commercial operations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">4. Weather Systems</h2>
                    <h3 className="text-xl mb-2">Air Masses:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Polar and Tropical masses</li>
                      <li>Continental and Maritime influences</li>
                      <li>Climate Zones: Tropical, Temperate, Polar</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">5. Advanced Weather Reports</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>METAR: Detailed observation analysis</li>
                      <li>TAF: Extended forecasts up to 24 or 30 hours</li>
                      <li>SIGMET and AIRMET interpretation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">6. Adiabatics and Stability</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Dry Adiabatic Lapse Rate (DALR): 3°C/1000 ft</li>
                      <li>Saturated Adiabatic Lapse Rate (SALR): ~1.5°C/1000 ft (varies with moisture)</li>
                      <li>Stability conditions: Stable: SALR < DALR, Unstable: SALR > DALR</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">7. Advanced Icing Analysis</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Types: Rime (Milky, forms in stratiform clouds), Clear (Transparent, forms in cumuliform clouds)</li>
                      <li>Temperature Range: +2°C to -20°C</li>
                      <li>Impact on aircraft performance and safety</li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/atpl-meteorology")}
                  className="gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Start Practice Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ATPLMeteorologicalMaterial;