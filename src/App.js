import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Categories from "./scenes/Categories";
import Search from "./scenes/Search";
import TopNews from "./scenes/TopNews";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={TopNews} />
          <Route path="/top-news" component={TopNews} />
          <Route path="/categories" component={Categories} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
