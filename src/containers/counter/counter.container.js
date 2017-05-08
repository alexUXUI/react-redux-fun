import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { increment, decrement } from '../../actions/counter.action';
import CounterScreen from '../../components/counter-presentation/counter-presentation.component';
import PropTypes from 'prop-types';

class CounterContainer extends Component {

  render() {
    return(
      <Grid stackable centered columns={2}>
        <Grid.Column>
          <button onClick={ this.props.increment } >
            increment
          </button>
          <button onClick={ this.props.decrement } >
            decrement
          </button>
        </Grid.Column>
        <Grid.Column>
          <CounterScreen counter={ this.props.counter } />
        </Grid.Column>
      </Grid>
    )
  }

  static propTypes = {
    counter: PropTypes.object.isRequired,
  }

};

function mapStateToProps( state ) { // lets you choose which pieces of data you want to provide
  let { counter } = state;
  return {
    counter
  };
}

function matchDispatchToProps( dispatch ) { // dispatch => call a function // pass action to redux and to component
  return bindActionCreators({ // register all your actions here
    increment,
    decrement
  }, dispatch);
}

export default connect( mapStateToProps, matchDispatchToProps )( CounterContainer );
