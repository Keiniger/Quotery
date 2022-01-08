import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner"

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }>
        <Switch>
          <Redirect from="/" to="/quotes" exact />
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}
