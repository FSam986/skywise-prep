import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const CPLMeteorologicalMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">CPL Meteorology</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Advanced meteorological concepts for Commercial Pilot License
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">1. Advanced Atmospheric Concepts</h2>
                    <h3 className="text-xl mb-2">Key Values:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Tropopause height: ~8 km (poles), ~16-18 km (equator)</li>
                      <li>Tropopause temperature: -40°C (poles), -75°C to -80°C (equator)</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">2. Advanced Pressure Systems</h2>
                    <h3 className="text-xl mb-2">QFE, QNH, QFF:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>QFE: Pressure at aerodrome reference point</li>
                      <li>QNH: Pressure adjusted to MSL using ISA</li>
                      <li>QFF: True MSL pressure considering actual temperature</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">3. Density Altitude</h2>
                    <p>Density Altitude Formula:</p>
                    <pre className="bg-gray-100 p-2 rounded">
                      Density Altitude = Pressure Altitude + [120 × (Temp - ISA Temp)]
                    </pre>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">4. Adiabatics and Stability</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Dry Adiabatic Lapse Rate (DALR): 3°C/1000 ft</li>
                      <li>Saturated Adiabatic Lapse Rate (SALR): ~1.5°C/1000 ft</li>
                      <li>Stability conditions: SALR vs DALR comparison</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">5. Turbulence</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Mechanical turbulence</li>
                      <li>Thermal turbulence</li>
                      <li>Wake turbulence</li>
                      <li>Clear Air Turbulence (CAT)</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">6. Icing</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Rime ice: Milky, forms in stratiform clouds</li>
                      <li>Clear ice: Transparent, forms in cumuliform clouds</li>
                      <li>Temperature range: +2°C to -20°C</li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/cpl-meteorology")}
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

export default CPLMeteorologicalMaterial;