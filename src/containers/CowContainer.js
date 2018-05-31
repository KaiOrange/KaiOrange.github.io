import React from 'react';
import CowCard from '../components/CowCard.js';
import utils from '../utils/index.js';
import { connect } from 'react-redux';
import { addCowCard, removeCowCard } from '../store/cowReducer.js';

class CowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   cowCords: {}
    };
    this.speedBase = 10;
    this.hanldeMouseDown = this.hanldeMouseDown.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
  }

  componentDidMount() {}

  hanldeMouseDown(e) {
    let pageX = e.pageX - e.target.offsetLeft;
    let pageY = e.pageY - e.target.offsetTop;
    let uuid = utils.uuid();
    this.props.addCowCard({
      id: uuid,
      speedX: utils.getRandom(this.speedBase * 2) - this.speedBase, //X的速度
      pageX, //X的位置
      pageY, //X的位置
      velocity: -utils.getRandom(800) //向上的速度
    });
  }

  onDestroy(id) {
    this.props.removeCowCard(id);
  }

  render() {
    return (
      <div>
        <div className="masked-text" style={{ fontSize: '2.8rem' }}>
          Try to click?
        </div>
        <div className="cow-container" onMouseDown={this.hanldeMouseDown}>
          {(() => {
            let cowCords = this.props.cowCords;
            let cmList = [];
            for (var id in cowCords) {
              let cowCord = cowCords[id];
              cmList.push(
                <CowCard
                  key={id}
                  id={id}
                  pageX={cowCord.pageX}
                  pageY={cowCord.pageY}
                  velocity={cowCord.velocity}
                  speedX={cowCord.speedX}
                  onDestroy={this.onDestroy}
                />
              );
            }
            return cmList;
          })()}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return { cowCords: state.cowCords };
};
let mapDispatchToProps = { addCowCard, removeCowCard };

// export default CowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(CowContainer);
