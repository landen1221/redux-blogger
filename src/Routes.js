import { Route, Switch, Redirect } from "react-router-dom";
import NewPost from "./NewPost";
import Home from "./Home";
import PostView from "./PostView";

function Routes() {
  return (
    <Switch>
      <Route exact path="/new">
        <NewPost />
      </Route>
      <Route exact path="/:postId">
        <PostView />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
