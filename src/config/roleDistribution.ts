import { RoleDistribution } from "@/types/game";

export const DEFAULT_DISTRIBUTIONS: Record<number, RoleDistribution> = {
  4: { undercovers: 1, mrWhites: 0 },
  5: { undercovers: 1, mrWhites: 1 },
  6: { undercovers: 1, mrWhites: 1 },
  7: { undercovers: 2, mrWhites: 1 },
  8: { undercovers: 2, mrWhites: 1 },
  9: { undercovers: 3, mrWhites: 1 },
  10: { undercovers: 3, mrWhites: 1 },
  11: { undercovers: 4, mrWhites: 1 },
  12: { undercovers: 4, mrWhites: 1 },
  13: { undercovers: 5, mrWhites: 1 },
  14: { undercovers: 5, mrWhites: 2 },
  15: { undercovers: 6, mrWhites: 2 },
  16: { undercovers: 6, mrWhites: 2 },
  17: { undercovers: 7, mrWhites: 2 },
  18: { undercovers: 7, mrWhites: 2 },
  19: { undercovers: 8, mrWhites: 2 },
  20: { undercovers: 8, mrWhites: 2 },
  21: { undercovers: 9, mrWhites: 2 },
  22: { undercovers: 9, mrWhites: 3 },
  23: { undercovers: 10, mrWhites: 3 },
  24: { undercovers: 10, mrWhites: 3 },
  25: { undercovers: 11, mrWhites: 3 },
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
