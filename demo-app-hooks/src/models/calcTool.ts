export type HistoryEntry = {
  id: number;
  operation: string;
  value: number;
};

export type CalcToolAppState = {
  //result: number;
  validationMessage: string;
  history: HistoryEntry[];
};
