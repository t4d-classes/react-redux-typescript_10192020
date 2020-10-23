export type Color = {
  id: number;
  name: string;
  hexcode: string;
};

export type NewColor = Omit<Color, 'id'>;

export type ColorToolAppState = {
  colors: Color[];
};
