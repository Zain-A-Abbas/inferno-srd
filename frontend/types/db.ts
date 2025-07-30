export type Class = {
  id: number;
  name: string;
  description: string;
}

export type Way = {
  id: number;
  weapon_proficiency: string;
  armor_proficiency: string;
  stat_boosts: string; // Consider parsing this to an object if it's JSON
  hit_points: number;
  saving_throws: string;
};

export type Order = {
  id: number;
  class_feat_subtitle: string;
  double_dice_subtitle: string;
  stat_boost_subtitle: string;
  expert_attacks_subtitle: string;
}