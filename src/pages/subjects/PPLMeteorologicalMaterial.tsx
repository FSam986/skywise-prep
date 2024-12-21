import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const PPLMeteorologicalMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Meteorology</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Basic meteorological principles and techniques for Private Pilot License
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">1. The Atmosphere</h2>
                    <h3 className="text-xl mb-2">Composition:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nitrogen: 78.09%, Oxygen: 20.95%, Argon: 0.93%, Carbon Dioxide: 0.03%</li>
                      <li>Trace gases include Neon, Helium, and Methane</li>
                    </ul>
                    <h3 className="text-xl mt-4 mb-2">Layers:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Troposphere: Contains most weather phenomena, temperature decreases with altitude</li>
                      <li>Stratosphere: Temperature increases with altitude due to ozone</li>
                      <li>Tropopause: Boundary between troposphere and stratosphere</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">2. Pressure</h2>
                    <p>Force exerted by air per unit area. Decreases with altitude.</p>
                    <h3 className="text-xl mt-4 mb-2">Standard Values:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Mean Sea Level (MSL) Pressure: 1013.25 hPa</li>
                      <li>Pressure lapse rate: ~1 hPa per 27 feet at MSL</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">3. Temperature and Humidity</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Standard lapse rate: 2°C/1000 ft</li>
                      <li>Relative Humidity: Ratio of actual to maximum water vapor content</li>
                      <li>Dew Point: Temperature at which air becomes saturated</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">4. Clouds and Precipitation</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Low clouds: Stratus, Stratocumulus</li>
                      <li>Middle clouds: Altostratus, Altocumulus</li>
                      <li>High clouds: Cirrus, Cirrostratus</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">5. Weather Reports</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>METAR: Current weather observation</li>
                      <li>TAF: Weather forecast</li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-meteorology")}
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

export default PPLMeteorologicalMaterial;