export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const RECORD = 'RECORD';

export const undoAction = () => (
  { type: UNDO });

export const redoAction = () => (
  { type: REDO });

export const recordAction = (color) => ({
  type: RECORD,
  payload: color
});
