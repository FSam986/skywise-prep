import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FlightComputerWidget = () => {
  const [groundSpeed, setGroundSpeed] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Plane className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>CX3 Flight Computer</DialogTitle>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
};