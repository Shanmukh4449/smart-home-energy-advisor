
import { ApplianceData } from "@/lib/energyCalculator";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface EnergyChartProps {
  applianceData: ApplianceData[];
}

const EnergyChart = ({ applianceData }: EnergyChartProps) => {
  const chartData = applianceData.map((item) => ({
    name: item.name,
    usage: item.usage,
    color: getApplianceColor(item.name),
  }));

  function getApplianceColor(name: string): string {
    switch (name.toLowerCase()) {
      case "ac":
        return "#0ea5e9"; // sky blue
      case "fan":
        return "#22c55e"; // green
      case "oven":
        return "#ef4444"; // red
      case "refrigerator":
        return "#8b5cf6"; // purple
      case "light":
        return "#f59e0b"; // amber
      default:
        return "#64748b"; // slate
    }
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value) => [`${value}%`, "Energy Usage"]}
        />
        <Bar
          dataKey="usage"
          fill="#0ea5e9"
          radius={[4, 4, 0, 0]}
          barSize={40}
          label={{
            position: "top",
            formatter: (value: number) => `${value.toFixed(1)}%`,
            fontSize: 12,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EnergyChart;
