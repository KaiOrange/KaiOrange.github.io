import React from 'react';
// import PropTypes from 'prop-types';
import './index.css';
import AutoType from './autotype.js';

class AutoTypeComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { textArray: this.props.text };
  }

  componentDidMount() {
    var arr = [
      { type: 'text', text: 'class Man' },
      { type: 'wait', time: 900 },
      { type: 'delete', num: 3 },
      { type: 'text', text: 'Guider {' },
      { type: 'br' },
      { type: 'text', text: '    constructor(name = "") {' },
      { type: 'br' },
      { type: 'text', text: '        this.name = name;' },
      { type: 'br' },
      { type: 'text', text: '     }' },
      { type: 'br' },
      { type: 'text', text: '}' },
      { type: 'wait', time: 100 },
      { type: 'delete', num: 1 },
      { type: 'text', text: '    sayHello() {' },
      { type: 'br' },
      {
        type: 'text',
        text: "        console.log(`Hello! I'm ${this.name}.`);"
      },
      { type: 'br' },
      { type: 'text', text: '    }' },
      { type: 'br' },
      { type: 'text', text: '}' },
      { type: 'br' },
      { type: 'text', text: 'let guider = new Guider("World");' },
      { type: 'delete', num: 8 },
      { type: 'text', text: 'Bob"' },
      { type: 'delete', num: 4 },
      { type: 'text', text: 'Orange");' },
      { type: 'br' },
      { type: 'text', text: 'guider.sayHello();' },
      { type: 'br' }
    ];

    var autoType = new AutoType(this.el, arr, {
      // 设置打字时间，表示在无设置的情况下，打字间隔为 200ms
      speed: 200
    });
    autoType.once('end', function() {
      console.log("Hello! I'm Orange.");
    });
  }

  render() {
    return (
      <div
        className="auto-type-container code-editor"
        ref={el => (this.el = el)}
      />
    );
  }
}

// AutoTypeComponent.propTypes = {
//     text: PropTypes.array.isRequired,
// };

export default AutoTypeComponent;
