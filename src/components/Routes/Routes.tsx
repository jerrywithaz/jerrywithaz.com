import React from "react";
import ReactRouterExtended, { Switch } from "react-router-extended";
import routes from "@app/routes";

const Routes = () => {
  return (
    <ReactRouterExtended
      authenticated={false}
      initialA11yMessage="Welcome to Jerry With a Z"
      redirectPathAfterLogin="/login"
      initialDocumentTitle="JerryWithAZ.com"
      routes={routes}
      FoundComponent={({ routes }) => <Switch routes={routes} />}
    />
  );
};

export default Routes;
