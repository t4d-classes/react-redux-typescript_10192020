import { ColorForm } from "../components/ColorForm";

// type alias
export type Color = {
  id: number;
  name: string;
  hexcode: string;
};

// export interface Color {
//   id: number;
//   name: string;
// }

export type NewColor = Omit<Color, "id">;
