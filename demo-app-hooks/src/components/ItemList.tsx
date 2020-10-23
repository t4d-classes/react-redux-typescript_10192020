import React from "react";

export type ItemListProps<T> = {
  items: T[];
  keyFn: (item: T) => string | number;
  contentFn: (item: T) => string | number | JSX.Element;
};

export function ItemList<T>({ items, keyFn, contentFn }: ItemListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyFn(item)}>{contentFn(item)}</li>
      ))}
    </ul>
  );
}
