import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const consoleMessages = store => next => action => {
  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('ski days', store.getState().allSkiDays.length)
  result = next(action)
  let { allSkiDays, goal, errors, resortNames } = store.getState()
  console.log(`
    ski days: ${allSkiDays.length}
    goal: ${goal}
    fetching: ${resortNames.fetching}
    suggestions: ${resortNames.suggestions}
    errors: ${errors.length}
  `)
  console.groupEnd()

  return result
}


export default (initialState={}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}