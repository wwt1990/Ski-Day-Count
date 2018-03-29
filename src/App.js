import React, { Component } from 'react';
import SkiDayList from './components/SkiDayList';
import SkiDayCount from './components/SkiDayCount';
import AddDayForm from './components/AddDayForm';
import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: "Mt. Shasta",
          date: "2016-10-23",
          powder: true,
          backcountry: false
        },
        {
          resort: "Kirkwood",
          date: "2016-5-6",
          powder: false,
          backcountry: false
        },
        {
          resort: "Mt. Tallac",
          date: "2016-2-2",
          powder: false,
          backcountry: true
        }
      ]
    };
    this.addDay = this.addDay.bind(this);
  }

  countDays(filter) {
    const { allSkiDays } = this.state;
    return allSkiDays.filter(day => filter ? day[filter] : day).length;
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    });
  }

  render() {

    return (
      <div className="container">
        {(this.props.location.pathname === '/') ?
          <SkiDayCount total={this.countDays()}
                       powder={this.countDays('powder')}
                       backcountry={this.countDays('backcountry')}
                       goal={15} /> :
          (this.props.location.pathname === '/add-day') ?
            <AddDayForm onNewDay={this.addDay} /> :
            <SkiDayList days={this.state.allSkiDays} filter={this.props.match.params.filter}/>

        }
        <Menu />
      </div>
    );
  }
}

export default App;
