export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

// export type CarKeys = 'id' | 'make' | 'model' | 'year' | 'color' | 'price';

export type CarKeys = keyof Car;

export type NewCar = Omit<Car, 'id'>;

export type NewCarKeys = keyof NewCar;

export type CarToolAppState = {
  cars: Car[];
  editCarId: number;
  isLoading: boolean;
};
