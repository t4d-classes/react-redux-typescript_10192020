import { Item, ItemId } from '../models/item';

export class RestClient<T extends Item> {

  // private baseUrl: string;

  // constructor(baseUrl: string) {
  //   this.baseUrl = baseUrl;
  // }

  constructor(private baseUrl: string) {}

  async all() {
    const res = await fetch(`${this.baseUrl}`);
    const items = await res.json();
    return items as T[];
  }

  async append(newItem: Omit<T, 'id'>) {
    const res = await fetch(`${this.baseUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });

    const car = await res.json();
    return car.id;
  }

  async replace(item: T) {
    await fetch(`${this.baseUrl}/${encodeURIComponent(item.id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  }

  async remove(itemId: ItemId) {
    await fetch(`${this.baseUrl}/${encodeURIComponent(itemId)}`, {
      method: 'DELETE',
    });
  }
}
