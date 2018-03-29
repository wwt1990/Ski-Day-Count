import React, { Component } from 'react';
import PropTypes from 'prop-types';

const tahoeResorts = [
  "Alpine Meadows",
  "Boreal",
  "Diamond Peak",
  "Donner Ski Ranch",
  "Heavenly",
  "Homewood",
  "Kirkwood",
  "Mt. Rose",
  "Northstar",
  "Squaw Valley",
  "Sugar Bowl"
];

class Autocomplete extends Component {
  get value() {
    return this.refs.inputResort.value;
  }

  set value(inputValue) {
    this.refs.inputResort.value = inputValue;
  }
  render() {
    return (
      <div>
        <input className='rounded ml-2' type='text' list='tahoe-resorts' ref='inputResort' />
        <datalist id='tahoe-resorts'>
          {this.props.options.map((opt, i) => <option key={i}>{opt}</option> )}
        </datalist>
      </div>
    );
  }
}

class AddDayForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.onNewDay({
      resort: this.refs.resort.value,
      date: this.refs.date.value,
      powder: this.refs.powder.checked,
      backcountry: this.refs.backcountry.checked
    })
    this.refs.resort.value = '';
    this.refs.date.value = '';
    this.refs.powder.checked = false;
    this.refs.backcountry.checked = false;

  }

  render() {
    const { resort, date, powder, backcountry } = this.props;
    return (
      <div className='container'>
        <h1 className='text-center my-5'>Add a Day</h1>
        <form className='mx-auto' style={{width:'60%'}} onSubmit={this.submit}>
          <div>
            <label htmlFor='resort'>Resort Name</label>
            <Autocomplete options={tahoeResorts}
                   defaultValue={resort}
                   ref='resort' />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <br/>
            <input className='rounded ml-2'
                   id='date'
                   type='date'
                   required
                   defaultValue={date}
                   ref='date' />
          </div>
          <div>
            <input id='powder'
                   type='checkbox'
                   defaultChecked={powder}
                   ref='powder' />
            <label className='ml-2' htmlFor='powder'>Powder Day</label>
          </div>
          <div>
            <input id='backcountry'
                   type='checkbox'
                   defaultChecked={backcountry}
                   ref='backcountry' />
            <label className= 'ml-2' htmlFor='backcountry'>Backcountry Day</label>
          </div>
          <button className='btn btn-primary btn-sm'>Add Day</button>
        </form>
      </div>
    );
  }
}

export default AddDayForm;

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool
}

AddDayForm.defaultProps = {
  resort: "Squaw Valley",
  date: new Date().toJSON().slice(0,10),
  powder: true,
  backcountry: false
}