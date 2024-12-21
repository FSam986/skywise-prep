import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AtmosphericStructure } from "@/components/meteorology/AtmosphericStructure";
import { PrecipitationSection } from "@/components/meteorology/PrecipitationSection";

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
              Advanced weather systems and meteorological principles for Commercial Pilot License
            </p>
          </div>

          <Tabs defaultValue="study" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="study">Study Material</TabsTrigger>
              <TabsTrigger value="quiz">Practice Quiz</TabsTrigger>
            </TabsList>

            <TabsContent value="study">
              <Card>
                <CardContent className="p-6">
                  <div className="prose prose-slate max-w-none">
                    <section className="space-y-8">
                      <AtmosphericStructure />
                      <PrecipitationSection />
                      <div>
                        <h2 className="text-2xl font-semibold mb-4">2. Advanced Pressure Systems</h2>
                        <h3 className="text-xl mb-3">Pressure Calculations and Systems:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            <strong>Pressure Measurements:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>QNH - Pressure adjusted to sea level</li>
                              <li>QFE - Actual pressure at aerodrome level</li>
                              <li>QFF - Sea level pressure at station location</li>
                              <li>Standard pressure - 1013.25 hPa / 29.92 inHg</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Pressure Calculations:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Pressure decreases approximately 1 hPa per 30 feet</li>
                              <li>Pressure altitude = indicated altitude when set to 1013.25</li>
                              <li>Density altitude = pressure altitude corrected for temperature</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Pressure Systems:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>High pressure (anticyclones) - clockwise flow (NH)</li>
                              <li>Low pressure (depressions) - counterclockwise flow (NH)</li>
                              <li>Col - neutral area between pressure systems</li>
                              <li>Trough - elongated area of low pressure</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-2xl font-semibold mb-4">3. Temperature and Humidity</h2>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            <strong>Temperature Relationships:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Dew point - temperature at which condensation occurs</li>
                              <li>Frost point - temperature at which sublimation occurs</li>
                              <li>Relative humidity - percentage of moisture content</li>
                              <li>Absolute humidity - actual water vapor content</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Lapse Rates:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>DALR (Dry Adiabatic Lapse Rate) - 3°C/1000ft</li>
                              <li>SALR (Saturated Adiabatic Lapse Rate) - 1.5°C/1000ft</li>
                              <li>ELR (Environmental Lapse Rate) - actual measured rate</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Temperature Inversions:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Surface inversion - caused by ground cooling</li>
                              <li>Upper air inversion - caused by subsidence</li>
                              <li>Frontal inversion - associated with weather fronts</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-2xl font-semibold mb-4">5. Visibility and Fog</h2>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            <strong>Types of Fog:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Radiation fog - forms on clear, calm nights</li>
                              <li>Advection fog - forms when warm air moves over cold surface</li>
                              <li>Steam fog - forms when cold air moves over warm water</li>
                              <li>Frontal fog - forms near weather fronts</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Visibility Measurements:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Meteorological visibility - horizontal visibility</li>
                              <li>RVR (Runway Visual Range) - slant visibility for landing</li>
                              <li>Flight visibility - visibility from cockpit</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Factors Affecting Visibility:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Precipitation intensity and type</li>
                              <li>Atmospheric pollution and haze</li>
                              <li>Time of day and sun position</li>
                              <li>Cloud base height and coverage</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

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

                      <div>
                        <h2 className="text-2xl font-semibold mb-4">8. Weather Charts and Forecasts</h2>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            <strong>Surface Analysis Charts:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Isobars - lines of equal pressure</li>
                              <li>Frontal systems and their movement</li>
                              <li>Pressure centers and values</li>
                              <li>Station plots and weather symbols</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Upper Air Charts:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Constant pressure charts (850, 700, 500 hPa)</li>
                              <li>Wind direction and speed</li>
                              <li>Temperature and humidity data</li>
                              <li>Height contours</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Aviation Weather Reports:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>METAR - current weather observation</li>
                              <li>TAF - terminal aerodrome forecast</li>
                              <li>SIGMET - significant meteorological information</li>
                              <li>AIRMET - airmen's meteorological information</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

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

                      <div>
                        <h2 className="text-2xl font-semibold mb-4">10. Hazardous Weather</h2>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            <strong>Thunderstorm Hazards:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Severe turbulence and wind shear</li>
                              <li>Lightning strikes and static electricity</li>
                              <li>Heavy precipitation and hail</li>
                              <li>Icing conditions above freezing level</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Turbulence Types:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Mechanical - terrain-induced</li>
                              <li>Thermal - heat-induced vertical motion</li>
                              <li>Wake turbulence - aircraft-induced</li>
                              <li>Clear air turbulence (CAT)</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Mountain Wave Phenomena:</strong>
                            <ul className="list-circle pl-6 mt-1">
                              <li>Formation conditions and characteristics</li>
                              <li>Associated cloud formations</li>
                              <li>Turbulence intensity and location</li>
                              <li>Avoidance techniques</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quiz">
              <Card>
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-semibold mb-4">Ready to Test Your Knowledge?</h2>
                  <p className="text-muted-foreground mb-8">
                    Take a practice quiz to test your understanding of CPL Meteorology concepts.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => navigate("/quiz/cpl-meteorology")}
                    className="gap-2"
                  >
                    <BookOpen className="h-5 w-5" />
                    Start Practice Quiz
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CPLMeteorologicalMaterial;
