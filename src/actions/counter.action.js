import { INCREMENT, DECREMENT } from './action-types'

const increment = ( payload ) => {

  let type = INCREMENT;

  let action = {
    type,
    payload
  };

  return action;
}

const decrement = ( payload ) => {

  let type = DECREMENT;

  let action = {
    type,
    payload
  };

  return action;
}

module.exports = {
  increment,
  decrement
}
