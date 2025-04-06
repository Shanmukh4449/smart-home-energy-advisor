
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Thermometer, Sun, Battery, User } from "lucide-react";

interface InputPanelProps {
  inputs: {
    temperature: number;
    timeOfDay: number;
    energyUsage: number;
    userPresence: boolean;
  };
  onChange: (name: string, value: number | boolean) => void;
  onUpdate: () => void;
}

const InputPanel = ({ inputs, onChange, onUpdate }: InputPanelProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Input Parameters</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-primary" />
                <Label className="font-medium">Temperature</Label>
              </div>
              <span className="text-sm font-medium">{inputs.temperature}°C</span>
            </div>
            <Slider
              value={[inputs.temperature]}
              min={0}
              max={40}
              step={1}
              onValueChange={(values) => onChange("temperature", values[0])}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Cold (0°C)</span>
              <span>Hot (40°C)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-primary" />
                <Label className="font-medium">Time of Day</Label>
              </div>
              <span className="text-sm font-medium">
                {inputs.timeOfDay}:00 {inputs.timeOfDay < 12 ? "AM" : "PM"}
              </span>
            </div>
            <Slider
              value={[inputs.timeOfDay]}
              min={0}
              max={23}
              step={1}
              onValueChange={(values) => onChange("timeOfDay", values[0])}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Morning</span>
              <span>Afternoon</span>
              <span>Night</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Battery className="h-4 w-4 text-primary" />
                <Label className="font-medium">Energy Usage</Label>
              </div>
              <span className="text-sm font-medium">{inputs.energyUsage}%</span>
            </div>
            <Slider
              value={[inputs.energyUsage]}
              min={0}
              max={100}
              step={5}
              onValueChange={(values) => onChange("energyUsage", values[0])}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Low (0%)</span>
              <span>Medium (50%)</span>
              <span>High (100%)</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <Label htmlFor="user-presence" className="font-medium">
                User Presence
              </Label>
            </div>
            <Switch
              id="user-presence"
              checked={inputs.userPresence}
              onCheckedChange={(checked) => onChange("userPresence", checked)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onUpdate} className="w-full">
          Update Energy Usage
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InputPanel;
