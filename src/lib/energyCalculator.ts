
export interface ApplianceData {
  name: string;
  usage: number;
}

// A simplified implementation of the fuzzy logic controller in JavaScript
export function calculateApplianceUsage(
  temperature: number,
  timeOfDay: number,
  energyUsage: number,
  userPresence: boolean
): ApplianceData[] {
  // Calculate AC usage
  let acUsage = 0;
  if (!userPresence) {
    acUsage = 0;
  } else if (temperature > 25) {
    acUsage = energyUsage > 70 ? 65 : 85;
  } else if (temperature > 15) {
    acUsage = 30;
  } else {
    acUsage = 0;
  }

  // Calculate Oven usage
  let ovenUsage = 0;
  if (!userPresence) {
    ovenUsage = 0;
  } else if (timeOfDay >= 6 && timeOfDay <= 9) {
    ovenUsage = energyUsage > 70 ? 30 : 50;
  } else if (timeOfDay >= 11 && timeOfDay <= 14) {
    ovenUsage = energyUsage > 70 ? 40 : 75;
  } else if (timeOfDay >= 17 && timeOfDay <= 20) {
    ovenUsage = energyUsage > 70 ? 35 : 85;
  } else {
    ovenUsage = 10;
  }

  // Calculate Refrigerator usage (always on but adjusts based on energy)
  let refrigeratorUsage = 0;
  if (energyUsage > 70) {
    refrigeratorUsage = 55;
  } else if (energyUsage > 40) {
    refrigeratorUsage = 70;
  } else {
    refrigeratorUsage = 85;
  }

  // Calculate Fan usage
  let fanUsage = 0;
  if (!userPresence) {
    fanUsage = 0;
  } else if (temperature > 25) {
    fanUsage = 85;
  } else if (temperature > 15) {
    fanUsage = 50;
  } else {
    fanUsage = 25;
  }

  // Calculate Light usage
  let lightUsage = 0;
  if (!userPresence) {
    lightUsage = 0;
  } else if (timeOfDay >= 6 && timeOfDay <= 11) {
    lightUsage = 30;
  } else if (timeOfDay >= 12 && timeOfDay <= 17) {
    lightUsage = 15;
  } else {
    lightUsage = 85;
  }

  return [
    { name: "AC", usage: acUsage },
    { name: "Oven", usage: ovenUsage },
    { name: "Refrigerator", usage: refrigeratorUsage },
    { name: "Fan", usage: fanUsage },
    { name: "Light", usage: lightUsage },
  ];
}
