import React from 'react';

import { Colour, NewColour } from '../models/colour';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';
import { ColourForm } from './ColourForm';

export type ColourToolProps = {
  colours: Colour[];
  onAppendColour: (colour: NewColour) => void;
};

export function ColourTool({
  colours,
  onAppendColour: appendColour,
}: ColourToolProps) {
  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ItemList
        items={colours}
        keyFn={(item) => item.id}
        contentFn={(item) => item.name}
      />
      <ColourForm buttonText="Add Colour" onSubmitColour={appendColour} />
    </>
  );
}
