export interface IProgressBar {
  unfilledColor: string;
  borderColor: string;
  fillColor: string;
  progress?: number;
}

export interface IBarContainer {
  backgroundColor: string;
  borderColor: string;
}

export interface IProgress {
  backgroundColor: string;
  width: number;
}
