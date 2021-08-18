import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from '../../state/reducer';
import { undoAction, redoAction, recordAction } from '../../actions/actions';

function App({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { current } = state;
  const undo = () => {
    dispatch(undoAction());
  };
  const redo = () => {
    dispatch(redoAction());
  };
  const record = (value) => {
    dispatch(recordAction(value));
  };

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        data-testid="color-input"
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        data-testid="display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;

App.propTypes = {
  initialState: PropTypes.object.isRequired
};
