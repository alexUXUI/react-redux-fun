import React from 'react';
import ReactDOM from 'react-dom';
import CounterScreen from './counter-presentation.component.spec';

import { shallow } from 'enzyme';

import Store from '../../store/store.dev'

describe(`\nCounter Container Unit Test Suite 🔬\n `, () => {

  beforeEach(() => {
    const div = document.createElement('div');
  });

  it('Counter container renders without crashing', () => {
    expect(true).toBe(true)
  });

})
