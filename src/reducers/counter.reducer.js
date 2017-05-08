export default function (state = { counter: 0 }, action) {

  let newState;

  switch ( action.type ) {

    case 'INCREMENT':
    
      newState = Object.assign({}, { counter: state.counter += 1 });
      return newState;

    case 'DECREMENT':

      newState = Object.assign({}, { counter: state.counter -= 1 });
      return newState;

    default:
      return state;

  }

}
