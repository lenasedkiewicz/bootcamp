import React from 'react';
import { shallow } from 'enzyme';
import PopupProduct from './PopupProduct';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component PopupProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <PopupProduct />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
