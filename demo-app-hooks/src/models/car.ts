import { Item } from "./item";

export interface Car extends Item {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export type CarKeys = keyof Car;

export type NewCar = Omit<Car, "id">;

export type NewCarKeys = keyof NewCar;

export const ORDER_ASC = "asc";
export const ORDER_DESC = "desc";

export type OrderDirection = "asc" | "desc";

export type CarsOrder = {
  column: CarKeys;
  direction: OrderDirection;
};
