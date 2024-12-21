import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FlightComputerWidget = () => {
  // Time, Speed, Distance Calculator
  const [groundSpeed, setGroundSpeed] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");

  // Wind Correction
  const [trueAirspeed, setTrueAirspeed] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [trueCourse, setTrueCourse] = useState("");
  const [windCorrection, setWindCorrection] = useState<{
    heading: string;
    groundSpeed: string;
  } | null>(null);

  // Fuel Calculator
  const [fuelFlow, setFuelFlow] = useState("");
  const [flightTime, setFlightTime] = useState("");
  const [fuelRequired, setFuelRequired] = useState("");
  const [reserves, setReserves] = useState("45"); // Default 45 minutes reserve

  const calculateTime = () => {
    const gs = parseFloat(groundSpeed);
    const dist = parseFloat(distance);
    if (gs && dist) {
      const timeInHours = dist / gs;
      const hours = Math.floor(timeInHours);
      const minutes = Math.round((timeInHours - hours) * 60);
      setTime(`${hours}:${minutes.toString().padStart(2, '0')}`);
    }
  };

  const calculateWindCorrection = () => {
    const tas = parseFloat(trueAirspeed);
    const ws = parseFloat(windSpeed);
    const wd = parseFloat(windDirection);
    const tc = parseFloat(trueCourse);

    if (tas && ws && !isNaN(wd) && !isNaN(tc)) {
      // Convert angles to radians
      const windAngle = ((450 - wd) % 360) * Math.PI / 180;
      const courseRad = tc * Math.PI / 180;

      // Calculate wind correction angle
      const crosswind = ws * Math.sin(windAngle - courseRad);
      const headwind = ws * Math.cos(windAngle - courseRad);
      
      const correctionAngle = Math.asin(crosswind / tas) * 180 / Math.PI;
      const groundSpeed = Math.sqrt(Math.pow(tas, 2) + Math.pow(ws, 2) - 
                        2 * tas * ws * Math.cos((windAngle - courseRad)));

      setWindCorrection({
        heading: `${Math.round(tc + correctionAngle)}°`,
        groundSpeed: `${Math.round(groundSpeed)} kts`
      });
    }
  };

  const calculateFuel = () => {
    const flow = parseFloat(fuelFlow);
    const time = parseFloat(flightTime);
    const reserveTime = parseFloat(reserves);

    if (flow && time && reserveTime) {
      const totalTime = time + (reserveTime / 60);
      const fuel = totalTime * flow;
      setFuelRequired(`${fuel.toFixed(1)} gallons`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Plane className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>CX3 Flight Computer</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="tsd" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tsd">Time/Speed/Distance</TabsTrigger>
            <TabsTrigger value="wind">Wind Correction</TabsTrigger>
            <TabsTrigger value="fuel">Fuel Planning</TabsTrigger>
          </TabsList>

          <TabsContent value="tsd">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="groundSpeed">Ground Speed (knots)</Label>
                <Input
                  id="groundSpeed"
                  type="number"
                  value={groundSpeed}
                  onChange={(e) => setGroundSpeed(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="distance">Distance (nautical miles)</Label>
                <Input
                  id="distance"
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
              </div>
              <Button onClick={calculateTime}>Calculate Time</Button>
              {time && (
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Estimated Time En Route</p>
                  <p className="text-2xl font-bold">{time}</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="wind">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="tas">True Airspeed (knots)</Label>
                <Input
                  id="tas"
                  type="number"
                  value={trueAirspeed}
                  onChange={(e) => setTrueAirspeed(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="windSpeed">Wind Speed (knots)</Label>
                  <Input
                    id="windSpeed"
                    type="number"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="windDirection">Wind Direction (°)</Label>
                  <Input
                    id="windDirection"
                    type="number"
                    value={windDirection}
                    onChange={(e) => setWindDirection(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="trueCourse">True Course (°)</Label>
                <Input
                  id="trueCourse"
                  type="number"
                  value={trueCourse}
                  onChange={(e) => setTrueCourse(e.target.value)}
                />
              </div>
              <Button onClick={calculateWindCorrection}>Calculate Wind Correction</Button>
              {windCorrection && (
                <div className="bg-gray-100 p-4 rounded-lg text-center grid gap-2">
                  <div>
                    <p className="text-sm text-gray-500">True Heading</p>
                    <p className="text-2xl font-bold">{windCorrection.heading}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ground Speed</p>
                    <p className="text-2xl font-bold">{windCorrection.groundSpeed}</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="fuel">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fuelFlow">Fuel Flow (gallons/hour)</Label>
                <Input
                  id="fuelFlow"
                  type="number"
                  value={fuelFlow}
                  onChange={(e) => setFuelFlow(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="flightTime">Flight Time (hours)</Label>
                <Input
                  id="flightTime"
                  type="number"
                  value={flightTime}
                  onChange={(e) => setFlightTime(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reserves">Reserve Time (minutes)</Label>
                <Input
                  id="reserves"
                  type="number"
                  value={reserves}
                  onChange={(e) => setReserves(e.target.value)}
                />
              </div>
              <Button onClick={calculateFuel}>Calculate Fuel Required</Button>
              {fuelRequired && (
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Total Fuel Required</p>
                  <p className="text-2xl font-bold">{fuelRequired}</p>
                  <p className="text-xs text-gray-500">(Including reserves)</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};