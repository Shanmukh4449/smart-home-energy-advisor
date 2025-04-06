
import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import { Toaster } from "sonner";
import InputPanel from "../components/InputPanel";
import { ApplianceData, calculateApplianceUsage } from "../lib/energyCalculator";
import { toast } from "sonner";

const Index = () => {
  const [inputs, setInputs] = useState({
    temperature: 25,
    timeOfDay: 14,
    energyUsage: 50,
    userPresence: true,
  });

  const [applianceData, setApplianceData] = useState<ApplianceData[]>([]);

  useEffect(() => {
    // Calculate initial appliance data
    updateApplianceData();
  }, []); 

  const updateApplianceData = () => {
    const newData = calculateApplianceUsage(
      inputs.temperature,
      inputs.timeOfDay,
      inputs.energyUsage,
      inputs.userPresence
    );
    setApplianceData(newData);
    toast.success("Energy usage updated successfully");
  };

  const handleInputChange = (name: string, value: number | boolean) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    updateApplianceData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30 pb-12">
      <Header />
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          <div className="lg:col-span-4">
            <InputPanel 
              inputs={inputs} 
              onChange={handleInputChange} 
              onUpdate={handleUpdateClick} 
            />
          </div>
          <div className="lg:col-span-8">
            <Dashboard applianceData={applianceData} />
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
};

export default Index;
