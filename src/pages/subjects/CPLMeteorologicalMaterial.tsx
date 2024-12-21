import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/BackButton";
import { AtmosphericStructure } from "@/components/meteorology/AtmosphericStructure";
import { PressureSystemsSection } from "@/components/meteorology/PressureSystemsSection";
import { TemperatureHumiditySection } from "@/components/meteorology/TemperatureHumiditySection";
import { PrecipitationSection } from "@/components/meteorology/PrecipitationSection";
import { VisibilityFogSection } from "@/components/meteorology/VisibilityFogSection";
import { WindSystemsSection } from "@/components/meteorology/WindSystemsSection";
import { AirMassesFrontsSection } from "@/components/meteorology/AirMassesFrontsSection";
import { WeatherChartsSection } from "@/components/meteorology/WeatherChartsSection";
import { IcingConditionsSection } from "@/components/meteorology/IcingConditionsSection";
import { HazardousWeatherSection } from "@/components/meteorology/HazardousWeatherSection";

const CPLMeteorologicalMaterial = () => {
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

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <section className="space-y-8">
                  <AtmosphericStructure />
                  <PressureSystemsSection />
                  <TemperatureHumiditySection />
                  <PrecipitationSection />
                  <VisibilityFogSection />
                  <WindSystemsSection />
                  <AirMassesFrontsSection />
                  <WeatherChartsSection />
                  <IcingConditionsSection />
                  <HazardousWeatherSection />
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CPLMeteorologicalMaterial;