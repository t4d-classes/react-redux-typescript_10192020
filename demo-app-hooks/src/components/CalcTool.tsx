import React, { useState } from 'react';
import { HistoryEntry } from '../models/calcTool';

export type CalcToolProps = {
  result: number;
  history: HistoryEntry[];
  validationMessage: string;
  onAdd: (value: number) => void;
  onSubtract: (value: number) => void;
  onMultiply: (value: number) => void;
  onDivide: (value: number) => void;
  onClear: () => void;
  onDeleteHistoryEntry: (historyEntryId: number) => void;
};

export const CalcTool = ({
  result,
  history,
  validationMessage,
  onAdd: add,
  onSubtract: subtract,
  onMultiply: multiply,
  onDivide: divide,
  onClear,
  onDeleteHistoryEntry,
}: CalcToolProps) => {
  const [numInput, setNumInput] = useState(0);

  const clear = () => {
    setNumInput(0);
    onClear();
  };

  return (
    <>
      <form>
        {validationMessage && <div>Error: {validationMessage}</div>}
        <div>Result: {result}</div>
        <div>
          Num Input:{' '}
          <input
            type="number"
            value={numInput}
            onChange={(e) => setNumInput(Number(e.target.value))}
          />
        </div>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>
            +
          </button>
          <button type="button" onClick={() => subtract(numInput)}>
            -
          </button>
          <button type="button" onClick={() => multiply(numInput)}>
            *
          </button>
          <button type="button" onClick={() => divide(numInput)}>
            /
          </button>
          <button type="button" onClick={clear}>
            Clear
          </button>
        </fieldset>
      </form>
      <ul>
        {history.map((historyEntry) => (
          <li key={historyEntry.id}>
            {historyEntry.operation} - {historyEntry.value}
            <button
              type="button"
              onClick={() => onDeleteHistoryEntry(historyEntry.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
