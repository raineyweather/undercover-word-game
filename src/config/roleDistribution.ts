import { RoleDistribution } from "@/types/game";

export const DEFAULT_DISTRIBUTIONS: Record<number, RoleDistribution> = {
  4: { undercovers: 1, mrWhites: 0 },
  5: { undercovers: 1, mrWhites: 1 },
  6: { undercovers: 1, mrWhites: 1 },
  7: { undercovers: 1, mrWhites: 1 },
  8: { undercovers: 2, mrWhites: 1 },
  9: { undercovers: 2, mrWhites: 1 },
  10: { undercovers: 2, mrWhites: 1 },
  11: { undercovers: 3, mrWhites: 1 },
  12: { undercovers: 3, mrWhites: 1 },
  13: { undercovers: 3, mrWhites: 1 },
  14: { undercovers: 4, mrWhites: 1 },
  15: { undercovers: 4, mrWhites: 1 },
  16: { undercovers: 4, mrWhites: 1 },
  17: { undercovers: 5, mrWhites: 1 },
  18: { undercovers: 5, mrWhites: 1 },
  19: { undercovers: 5, mrWhites: 1 },
  20: { undercovers: 5, mrWhites: 2 },
  21: { undercovers: 6, mrWhites: 1 },
  22: { undercovers: 6, mrWhites: 1 },
  23: { undercovers: 6, mrWhites: 2 },
  24: { undercovers: 6, mrWhites: 2 },
  25: { undercovers: 7, mrWhites: 1 },
};

export const calculateDefaultDistribution = (playerCount: number): RoleDistribution => {
  return DEFAULT_DISTRIBUTIONS[playerCount] || DEFAULT_DISTRIBUTIONS[4];
};

export const distributionMeetsLimits = (distribution: RoleDistribution, playerCount: number): boolean => {
  const { undercovers, mrWhites } = distribution;
  const totalSpecialRoles = undercovers + mrWhites;
  const civilians = playerCount - totalSpecialRoles;

  return totalSpecialRoles <= civilians 
         && undercovers < civilians
         && undercovers >= 0
         && mrWhites >= 0
         && totalSpecialRoles > 0;
};
