import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,
         Switch,
         Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Whoops404 from './components/Whoops404';

import registerServiceWorker from './registerServiceWorker';

import C from './constants';
import storeFactory from './store';

import {suggestResortNames} from './actions'
const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  {}

const saveState = () => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store
window.C = C

store.dispatch(suggestResortNames('hea'))


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/list-days' component={App} />
      <Route path="/list-days/:filter" component={App} />
      <Route exact path='/add-day' component={App}/>
      <Route path='*' component={Whoops404}/>
    </Switch>
  </HashRouter>,
  document.getElementById('root'));

registerServiceWorker();
