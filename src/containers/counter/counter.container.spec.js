import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './counter.container';

import { shallow } from 'enzyme';
import { inspect } from 'util';

import increment from '../../actions/counter.action';
import Store from '../../store/store.dev';

describe(`\nCounter Container Unit Test Suite 🔬\n `, () => {

  beforeEach(() => {
    let component = shallow(<CounterContainer store={ Store } />);
  });

  it('Has a increment method that updates redux', () => {

    let counter;
    let randomNumberToIncrement = Math.floor(Math.random() * 10);

    let beforeIncrement = () => {
      counter = Store.getState().counter.counter;
      return Promise.resolve(counter);
    }

    let incrementCounter = () => {
      for(let i = 0; i < randomNumberToIncrement; i++) {
        component.props().increment();
      }
      counter = Store.getState().counter.counter;
      return Promise.resolve(counter);
    }

    beforeIncrement( ).then(counter => {
      expect( counter ).toBe( 0 );
      incrementCounter( ).then(counter => {
        expect( counter ).toBe( randomNumberToIncrement );
      });
    });

  });

});
