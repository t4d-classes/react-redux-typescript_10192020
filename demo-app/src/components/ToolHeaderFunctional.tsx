import React from "react";

export type ToolHeaderProps = {
  headerText?: string;
};

export function ToolHeader(props: ToolHeaderProps) {
  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );
}

ToolHeader.defaultProps = {
  headerText: "The Tool",
};
