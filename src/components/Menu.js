import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDaysIcon from 'react-icons/lib/fa/table';

class Menu extends Component {
  render() {
    return (
      <nav className='display-4 text-center fixed-bottom bg-dark d-flex justify-content-around'>
        <Link to ='/' className='mx-5 text-light'><HomeIcon /></Link>
        <Link to ='/add-day' className='mx-5 text-light'><AddDayIcon /></Link>
        <Link to ='/list-days' className='mx-5 text-light'><ListDaysIcon /></Link>
      </nav>
    );
  }
}

export default Menu;