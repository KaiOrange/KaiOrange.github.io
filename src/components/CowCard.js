import React from 'react';
import utils from '../utils/index.js';
import { physics, styler, listen } from 'popmotion';

class CowCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      cow: utils.randomCows(),
      pageX: this.props.pageX,
      pageY: this.props.pageY,
      velocity: this.props.velocity,
      speedX: this.props.speedX
    };
  }
  componentDidMount() {
    let el = this.el;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    let left = this.state.pageX - width / 2;
    let top = this.state.pageY - height / 2;
    el.style.left = left + 'px';
    el.style.top = top + 'px';
    const stylerEl = styler(el);
    let { speedX, velocity } = this.state;
    this.listener = null;

    this.gravity = physics({
      acceleration: 1000,
      restSpeed: false,
      velocity
    }).start(y => {
      stylerEl.set('x', stylerEl.get('x') + speedX);
      stylerEl.set('y', y);
      var h =
        document.documentElement.offsetHeight || document.body.offsetHeight;
      h = Math.max(h, window.screen.height);
      if (y > h) {
        this.cleanEventListener();
        this.cleanGravity();
        this.cleanComponent(el);
      }
    });

    this.listener = listen(el, 'mousedown').start(e => {
      this.gravity.setVelocity(-800);
      speedX = ~~(Math.random() * 2) === 0 ? -speedX : speedX;
      e.stopPropagation();
    });
  }

  cleanEventListener() {
    if (!!this.listener) {
      this.listener.stop();
      this.listener = null;
    }
  }
  cleanGravity() {
    if (!!this.gravity) {
      this.gravity.stop();
      this.gravity = null;
    }
  }
  cleanComponent(el = this.el) {
    if (!!el) {
      let { onDestroy } = this.props;
      if (!!onDestroy) {
        onDestroy(this.state.id);
      } else {
        el.remove(); //强制清空
      }
    }
  }

  componentWillUnmount() {
    //这个其实没有什么用 这里做是为了以防万一
    this.cleanEventListener();
    this.cleanGravity();
  }

  render() {
    return (
      <div className="cow-card" ref={el => (this.el = el)}>
        <pre className={'text-left mb-0'}>{this.state.cow}</pre>
      </div>
    );
  }
}

export default CowCard;
