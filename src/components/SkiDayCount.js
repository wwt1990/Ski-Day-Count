import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

class SkiDayCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }

  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total / goal)
  }

  render() {
    return(
      <div className='container'>
        <div className='text-center mb-5 display-4'><span>{this.props.total}</span><Calendar /><span>days</span></div>
        <div className='row my-5'>
          <div className='col text-center lead'><span>{this.props.powder}</span><SnowFlake /><span>days</span></div>
          <div className='col text-center lead'><span>{this.props.backcountry}</span><Terrain /><span>days</span></div>
        </div>
        <div className='text-center mt-5'><span className='display-4'>{this.calcGoalProgress(this.props.total, this.props.goal)}, {this.props.goal} days</span></div>
      </div>
    );
  }
}

export default SkiDayCount;

// SkiDayCount.defaultProps = {
//   total: 50,
//   powder: 10,
//   backcountry: 15,
//   goal: 100
// };

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
}



