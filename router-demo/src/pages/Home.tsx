import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

// import { useLocation } from "react-router-dom";

export type HomeProps = RouteComponentProps;

export const Home = withRouter((props: HomeProps) => {
  console.log(props);

  // const location = useLocation();

  return (
    <>
      <h2>Home</h2>
      <div>Welcome Home!</div>
      <div>{props.location.pathname}</div>
    </>
  );
});
