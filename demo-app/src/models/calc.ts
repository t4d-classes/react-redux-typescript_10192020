export type HistoryEntry = {
  id: number;
  opName: string;
  opValue: number;
};

export type CalcToolAppState = {
  result: number;
  history: HistoryEntry[];
  errorMessage: string;
};
