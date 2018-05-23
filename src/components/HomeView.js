import React from 'react';
import sky from '../assets/img/sky.jpg';
import ParallaxContainer from './ParallaxContainer.js';
import AutoTypeComponent from './AutoType/index.js';

function HomeView() {
  return (
    <div>
      <ParallaxContainer className="parallax-container-write-code">
        <div data-depth="0" />
        <div data-depth="0.25" />
        <div data-depth="0.5" />
        <div data-depth="0.75" />
        <div data-depth="1">
          <AutoTypeComponent />
        </div>
      </ParallaxContainer>
    </div>
  );
}

export default HomeView;
