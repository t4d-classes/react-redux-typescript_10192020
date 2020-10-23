export type Color = {
  id: number;
  name: string;
  hexcode: string;
};

export type ColorKeys = keyof Color;

export type NewColor = Omit<Color, 'id'>;

export type NewColorKeys = keyof NewColor;

export type ColorToolAppState = {
  colors: Color[];
};
