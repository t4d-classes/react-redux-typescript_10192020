import React, { Component, ChangeEvent } from 'react';

import { HistoryEntry } from '../models/calc';

export type CalcToolProps = {
  // store state
  result: number;
  history: HistoryEntry[];
  // actions bound to the store dispatch
  onAdd: (num: number) => void;
  onSubtract: (num: number) => void;
  onMultiply: (num: number) => void;
  onDivide: (num: number) => void;
};

type CalcToolState = {
  numInput: number;
};

export class CalcTool extends Component<CalcToolProps, CalcToolState> {
  state = {
    numInput: 0,
  };

  change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      numInput: Number(e.target.value),
    });
  };

  render() {
    return (
      <>
        <form>
          <div>Result: {this.props.result}</div>
          <div>
            Num Input:
            <input
              type="number"
              value={this.state.numInput}
              onChange={this.change}
            />
          </div>
          <fieldset>
            <button
              type="button"
              onClick={() => this.props.onAdd(this.state.numInput)}>
              +
            </button>
            <button
              type="button"
              onClick={() => this.props.onSubtract(this.state.numInput)}>
              -
            </button>
            <button
              type="button"
              onClick={() => this.props.onMultiply(this.state.numInput)}>
              *
            </button>
            <button
              type="button"
              onClick={() => this.props.onDivide(this.state.numInput)}>
              /
            </button>
          </fieldset>
        </form>
        <ul>
          {this.props.history.map((entry) => (
            <li key={entry.id}>
              {entry.opName} {entry.opValue}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
