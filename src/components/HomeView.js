import React from 'react';
// import sky from '../assets/img/sky.jpg';
import ParallaxContainer from './ParallaxContainer.js';
import AutoTypeComponent from './AutoType/index.js';
import { Button } from 'reactstrap';

function HomeView() {
  return (
    <div className="page-layout__viewport">
      <ParallaxContainer className="parallax-container-write-code">
        <div data-depth="0.3">
          <div />
        </div>
        <div data-depth="0.6">
          <div />
        </div>
        <div data-depth="0.9">
          <div />
        </div>
        <div data-depth="1.2">
          <div className="d-flex justify-content-center align-items-center">
            <Button
              color="success"
              onClick={() => {
                console.log('这里是彩蛋');
              }}
            >
              What this?
            </Button>
          </div>
        </div>
        <div data-depth="1.5">
          <AutoTypeComponent />
        </div>
      </ParallaxContainer>
    </div>
  );
}

export default HomeView;
