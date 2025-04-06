
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ApplianceData } from "../lib/energyCalculator";
import ApplianceCard from "./ApplianceCard";
import EnergyChart from "./EnergyChart";
import RecommendationsList from "./RecommendationsList";

interface DashboardProps {
  applianceData: ApplianceData[];
}

const Dashboard = ({ applianceData }: DashboardProps) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle>Energy Consumption</CardTitle>
          <CardDescription>
            Current energy usage of your smart home appliances
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <EnergyChart applianceData={applianceData} />
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {applianceData.map((appliance) => (
          <ApplianceCard 
            key={appliance.name} 
            appliance={appliance} 
          />
        ))}
      </div>
      
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Energy Saving Recommendations</CardTitle>
          <CardDescription>
            Smart suggestions to optimize your energy usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecommendationsList applianceData={applianceData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
