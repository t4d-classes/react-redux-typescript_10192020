import React, { Component } from "react";

export type ToolHeaderProps = {
  headerText?: string;
};

export class ToolHeader extends Component<ToolHeaderProps> {
  static defaultProps = {
    headerText: "The Tool",
  };

  render() {
    return (
      <header>
        <h1>{this.props.headerText}</h1>
      </header>
    );
  }
}
