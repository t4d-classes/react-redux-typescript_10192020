import React from "react";
import { useParams, RouteComponentProps } from "react-router-dom";

export type AboutProps = RouteComponentProps<{ id: string }>;

export const About = (props: AboutProps) => {
  const params = useParams<{ id: string }>();

  return (
    <>
      <h2>About</h2>
      <div>Who we are in our own words...</div>
      <ul>
        <li>From the Hook: {params.id}</li>
        <li>From the Parent: {props.match.params.id}</li>
      </ul>
    </>
  );
};
