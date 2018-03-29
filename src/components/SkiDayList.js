import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SkiDayRow from './SkiDayRow';


class SkiDayList extends Component {
  render() {
    const { days, filter } = this.props;
    const filteredDays = !filter || !filter.match(/powder|backcountry/) ? days : days.filter(day => day[filter])

    return (
      <div>
        <h1 className='text-center my-5'>List of Days</h1>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Resort</th>
              <th>Powder</th>
              <th>Backcountry</th>
            </tr>
          </thead>
          <tbody>
            {filteredDays.map(
              (day, index) =>
              <SkiDayRow key={index}
                         {...day} />)}
          </tbody>
        </table>
        <div className='text-center d-flex justify-content-around'>
          <button className='btn btn-warning'><Link className='text-dark' to='/list-days'>All Days</Link></button>
          <button className='btn btn-warning'><Link className='text-dark' to='/list-days/powder'>Powder Days</Link></button>
          <button className='btn btn-warning'><Link className='text-dark' to='/list-days/backcountry'>Backcountry Days</Link></button>
        </div>
      </div>
    );
  }
}

export default SkiDayList;

SkiDayList.propTypes = {
  days: PropTypes.array
}

// SkiDayList.defaultProps = {
//   days: [
//     {
//       resort: "Squaw Valley",
//       date: new Date("1/2/2016"),
//       powder: true,
//       backcountry: false
//     },
//     {
//       resort: "Kirkwood",
//       date: new Date("3/28/2016"),
//       powder: false,
//       backcountry: false
//     },
//     {
//       resort: "Mt. Tallac",
//       date: new Date("4/2/2016"),
//       powder: false,
//       backcountry: true
//     }
//   ]
// }
