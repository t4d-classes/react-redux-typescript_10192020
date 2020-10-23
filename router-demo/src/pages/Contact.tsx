import React from "react";
import { RouteComponentProps } from "react-router-dom";

export type ContactProps = {
  message: string;
} & RouteComponentProps;

export const Contact = (props: ContactProps) => {
  const goHome = () => {
    props.history.push("/");
  };

  return (
    <>
      <h2>Contact</h2>
      <div>{props.message}</div>

      <button type="button" onClick={goHome}>
        Go Home
      </button>
    </>
  );
};
