export type Flow = {
  content: string;
  level: number;
  columns: string[];
  invert: boolean;
  focus: boolean;
  index: number;
  lastFocus: number[];
  children: Box[];
  history: any;
  id: number;
};
export type Box = {
  content: string;
  children: Box[];
  index: number;
  level: number;
  focus: boolean;
  empty?: boolean;
};
