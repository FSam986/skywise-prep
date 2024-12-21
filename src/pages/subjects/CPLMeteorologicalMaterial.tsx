import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
                    <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">1. Advanced Atmospheric Structure</h2>
                    <h3 className="text-xl mb-2">Composition and Layers:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Detailed composition of atmosphere</li>
                      <li>Troposphere characteristics and phenomena</li>
                      <li>Tropopause variations with latitude</li>
                      <li>Stratosphere and its impact on aviation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">2. Advanced Pressure Systems</h2>
                    <h3 className="text-xl mb-2">Pressure Calculations:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>QNH, QFE, and QFF relationships</li>
                      <li>Pressure altitude calculations</li>
                      <li>Pressure system movements and effects</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">3. Temperature and Humidity</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Temperature/Dew point relationship</li>
                      <li>Lapse rates and inversions</li>
                      <li>Effects on aircraft performance</li>
                      <li>Humidity measurements and calculations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">4. Cloud Formation and Precipitation</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cloud types and associated weather</li>
                      <li>Precipitation processes</li>
                      <li>Thunderstorm development stages</li>
                      <li>Associated hazards to aviation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">5. Visibility and Fog</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Types of fog and formation conditions</li>
                      <li>Visibility measurement methods</li>
                      <li>RVR and its significance</li>
                      <li>Effects on commercial operations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">6. Wind Systems</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Global circulation patterns</li>
                      <li>Local wind effects and terrain influence</li>
                      <li>Wind shear and microburst recognition</li>
                      <li>Jet streams and their impact</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">7. Air Masses and Fronts</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Air mass classification and characteristics</li>
                      <li>Frontal types and associated weather</li>
                      <li>Frontal movement prediction</li>
                      <li>Flight planning considerations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">8. Weather Charts and Forecasts</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Surface analysis charts</li>
                      <li>Upper air charts interpretation</li>
                      <li>METAR and TAF decoding</li>
                      <li>SIGMET and AIRMET interpretation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">9. Icing Conditions</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Types of airframe icing</li>
                      <li>Carburetor and engine icing</li>
                      <li>Anti-icing and de-icing procedures</li>
                      <li>Icing intensity classifications</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">10. Hazardous Weather</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Thunderstorm avoidance</li>
                      <li>Turbulence types and causes</li>
                      <li>Mountain wave phenomena</li>
                      <li>Tropical weather systems</li>
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
