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
                      <li>Tropopause: Boundary between troposphere and stratosphere, height varies with latitude (higher at equator)</li>
                    </ul>
                    <h3 className="text-xl mt-4 mb-2">Key Values:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Tropopause height: ~8 km (poles), ~16-18 km (equator)</li>
                      <li>Tropopause temperature: -40°C (poles), -75°C to -80°C (equator)</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">2. Pressure</h2>
                    <p>Definition: Force exerted by air per unit area. Decreases with altitude.</p>
                    <h3 className="text-xl mt-4 mb-2">Standard Values:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Mean Sea Level (MSL) Pressure: 1013.25 hPa</li>
                      <li>Pressure lapse rate: ~1 hPa per 27 feet at MSL</li>
                    </ul>
                    <h3 className="text-xl mt-4 mb-2">QFE, QNH, QFF:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>QFE: Pressure at aerodrome reference point</li>
                      <li>QNH: Pressure adjusted to MSL using ISA</li>
                      <li>QFF: True MSL pressure considering actual temperature</li>
                    </ul>
                    <h3 className="text-xl mt-4 mb-2">Formula for ISA Temperature:</h3>
                    <pre className="bg-gray-100 p-2 rounded">
                      ISA Temp = 15 - (2 × altitude in thousands of feet)
                    </pre>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">3. Density</h2>
                    <p>Density: Mass of air per unit volume.</p>
                    <h3 className="text-xl mt-4 mb-2">Key Relationships:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Density ∝ Pressure</li>
                      <li>Density ∝ 1/Temperature</li>
                      <li>Density decreases with altitude</li>
                    </ul>
                    <h3 className="text-xl mt-4 mb-2">Density Altitude Formula:</h3>
                    <pre className="bg-gray-100 p-2 rounded">
                      Density Altitude = Pressure Altitude + [120 × (Temp - ISA Temp)]
                    </pre>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">4. Temperature</h2>
                    <h3 className="text-xl mb-2">Lapse Rate:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Standard: 0.65°C/100 m (2°C/1000 ft)</li>
                      <li>Isothermal in the stratosphere (-56.5°C between 11 km and 20 km)</li>
                      <li>Temperature Inversions: Stable layers where temperature increases with altitude</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">5. Humidity</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Relative Humidity: Ratio of actual to maximum water vapor content</li>
                      <li>Dew Point: Temperature at which air becomes saturated</li>
                      <li>Effect on Density: Increased humidity decreases density</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">6. Adiabatics and Stability</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Dry Adiabatic Lapse Rate (DALR): 3°C/1000 ft</li>
                      <li>Saturated Adiabatic Lapse Rate (SALR): ~1.5°C/1000 ft (varies with moisture)</li>
                      <li>Stability conditions: Stable: SALR {'<'} DALR, Unstable: SALR {'>'} DALR</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">7. Turbulence</h2>
                    <h3 className="text-xl mb-2">Types:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Mechanical, Thermal, Wake, Clear Air Turbulence (CAT)</li>
                      <li>Clear Air Turbulence: Found near jet streams and tropopause folds</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">8. Clouds and Precipitation</h2>
                    <h3 className="text-xl mb-2">Cloud Types:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Low (e.g., Stratus), Middle (e.g., Altostratus), High (e.g., Cirrus)</li>
                      <li>Precipitation Formation: Requires condensation nuclei and lifting mechanisms</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">9. Winds</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Coriolis Effect: Deflects winds to the right in the Northern Hemisphere</li>
                      <li>Geostrophic Winds: Balance between Coriolis force and pressure gradient</li>
                      <li>Jet Streams: High-altitude winds at the tropopause</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">10. Visibility</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Causes of Low Visibility: Fog, haze, precipitation</li>
                      <li>Runway Visual Range (RVR): Distance over which pilot can see runway markings</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">11. Icing</h2>
                    <h3 className="text-xl mb-2">Types:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Rime: Milky, forms in stratiform clouds</li>
                      <li>Clear: Transparent, forms in cumuliform clouds</li>
                      <li>Temperature Range: +2°C to -20°C</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">12. METARs and TAFs</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>METAR: Observed weather at an aerodrome</li>
                      <li>TAF: Forecast weather for an aerodrome, valid for up to 24 or 30 hours</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">13. Climatology</h2>
                    <h3 className="text-xl mb-2">Air Masses:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Polar, Tropical, Continental, Maritime</li>
                      <li>Climate Zones: Tropical, Temperate, Polar</li>
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