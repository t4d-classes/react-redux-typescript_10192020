import { useState } from 'react';

import { Item, ItemId } from '../models/item';

type AppendItem<S extends Item> = (item: Omit<S, 'id'>) => void;
type ReplaceItem<S extends Item> = (item: S) => void;
type RemoveItem = (itemId: ItemId) => void;

type UseList = <T extends Item>(
  initialItems: T[],
) => [T[], AppendItem<T>, ReplaceItem<T>, RemoveItem];

export const useList: UseList = <T extends Item>(initialItems: T[]) => {
  const [items, setItems] = useState([...initialItems]);

  const addItem: AppendItem<T> = (itemForm) => {
    setItems([
      ...items,
      {
        ...itemForm,
        id: Math.max(...items.map((c) => c.id), 0) + 1,
      } as T,
    ]);
  };

  const saveItem: ReplaceItem<T> = (item) => {
    const itemIndex = items.findIndex((c) => c.id === item.id);
    const newItems = items.concat();
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const deleteItem: RemoveItem = (itemId) => {
    setItems(items.filter((c) => c.id !== itemId));
  };

  return [items, addItem, saveItem, deleteItem];
};
