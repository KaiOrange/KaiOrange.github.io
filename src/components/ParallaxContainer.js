import React from 'react';
import Parallax from 'parallax-js';

class ParallaxContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.parallax = new Parallax(this.sceneEl, {
      pointerEvents: true
    });
  }

  componentWillUnmount() {
    if (!!this.parallax) {
      this.parallax.destroy();
      this.parallax = null;
    }
  }
  render() {
    return (
      <div
        ref={sceneEl => {
          this.sceneEl = sceneEl;
        }}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ParallaxContainer;
