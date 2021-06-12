import { Switch, Route } from "react-router-dom";

import { Main } from "../components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
};

export { Routes };
