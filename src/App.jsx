import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import Navigationbar from "./menu/Navigationbar";
import Services from "./pages/services/Services";
import Competences from "./pages/competences/Competences";
import Home from "./pages/Home/Home";
import PageTransition from "./animation/PageTransition";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/react-portfolio-dev/">
                  <PageTransition>
                    <Home />
                  </PageTransition>
                </Route>
                <Route exact path="/react-portfolio-dev/competences">
                  <PageTransition>
                    <Competences />
                  </PageTransition>
                </Route>
                <Route exact path="/react-portfolio-dev/contact">
                  <PageTransition>
                    <Services />
                  </PageTransition>
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
