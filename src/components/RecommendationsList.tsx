
import { ApplianceData } from "@/lib/energyCalculator";
import { AlertCircle, Check } from "lucide-react";

interface RecommendationsListProps {
  applianceData: ApplianceData[];
}

const RecommendationsList = ({ applianceData }: RecommendationsListProps) => {
  const getRecommendations = () => {
    const recommendations = [];

    for (const appliance of applianceData) {
      if (appliance.usage > 70) {
        recommendations.push({
          type: "warning",
          text: `Consider reducing the usage of ${appliance.name} to save energy.`,
        });
      } else if (appliance.usage > 50) {
        recommendations.push({
          type: "info",
          text: `${appliance.name} is using a moderate amount of energy. Consider optimizing its usage.`,
        });
      } else if (appliance.usage > 0) {
        recommendations.push({
          type: "success",
          text: `${appliance.name} usage is low. Keep it up!`,
        });
      }
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="space-y-2">
      {recommendations.length > 0 ? (
        recommendations.map((rec, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg flex items-start gap-3 ${
              rec.type === "warning"
                ? "bg-red-50 text-red-700"
                : rec.type === "info"
                ? "bg-amber-50 text-amber-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {rec.type === "warning" ? (
              <AlertCircle className="h-5 w-5 mt-0.5" />
            ) : rec.type === "info" ? (
              <AlertCircle className="h-5 w-5 mt-0.5" />
            ) : (
              <Check className="h-5 w-5 mt-0.5" />
            )}
            <p>{rec.text}</p>
          </div>
        ))
      ) : (
        <p className="text-muted-foreground italic">
          No recommendations available. Update your inputs to get personalized suggestions.
        </p>
      )}
    </div>
  );
};

export default RecommendationsList;
