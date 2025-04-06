
import { Card } from "@/components/ui/card";
import { ApplianceData } from "../lib/energyCalculator";
import { Progress } from "@/components/ui/progress";
import { Thermometer, Fan, Refrigerator, Lightbulb, ArrowUp } from "lucide-react";

interface ApplianceCardProps {
  appliance: ApplianceData;
}

const ApplianceCard = ({ appliance }: ApplianceCardProps) => {
  const getStatusColor = (usage: number) => {
    if (usage < 30) return "bg-energy-low";
    if (usage < 70) return "bg-energy-medium";
    return "bg-energy-high";
  };

  const getStatusText = (usage: number) => {
    if (usage < 30) return "Low";
    if (usage < 70) return "Medium";
    return "High";
  };

  const getApplianceIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "ac":
        return <Thermometer className="h-12 w-12" />;
      case "fan":
        return <Fan className="h-12 w-12" />;
      case "oven":
        return <ArrowUp className="h-12 w-12" />; // Replaced with ArrowUp since Oven is not available
      case "refrigerator":
        return <Refrigerator className="h-12 w-12" />;
      case "light":
        return <Lightbulb className="h-12 w-12" />;
      default:
        return <Thermometer className="h-12 w-12" />;
    }
  };

  return (
    <Card className="appliance-card group hover:border-primary/50">
      <div className="appliance-icon group-hover:opacity-30">
        {getApplianceIcon(appliance.name)}
      </div>
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold">{appliance.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <div
            className={`w-3 h-3 rounded-full ${getStatusColor(appliance.usage)} animate-pulse-slow`}
          ></div>
          <span className="text-sm text-muted-foreground">
            {getStatusText(appliance.usage)} Usage
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <div className="flex justify-between text-sm">
            <span>Energy Consumption</span>
            <span className="font-semibold">{appliance.usage.toFixed(1)}%</span>
          </div>
          <Progress value={appliance.usage} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export default ApplianceCard;
