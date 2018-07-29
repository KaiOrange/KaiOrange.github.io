import React from 'react';
// import { func } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import AsyncLoad from '../components/AsyncLoad';
// import { signOutWithCb } from '../store/fakeAuth';

export const AsyncZen = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "zen" */ '../containers/ZenContainer.js')
});

const AsyncHome = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "home" */ '../components/HomeView.js')
});

const AsyncCow = AsyncLoad({
  loader: () =>
    import(/* webpackChunkName: "home" */ '../containers/CowContainer.js')
});

const propTypes = {};

export function CustomHome({}) {
  return (
    <div>
      <Navbar />
      <Container className="text-center">
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/zenPage" component={AsyncZen} />
          <Route path="/cowsPage" component={AsyncCow} />
        </Switch>
      </Container>
    </div>
  );
}

CustomHome.propTypes = propTypes;

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomHome);
