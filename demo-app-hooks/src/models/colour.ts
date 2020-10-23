export type Colour = {
  id: number;
  name: string;
  hexcode: string;
};

export type NewColour = Omit<Colour, "id">;
