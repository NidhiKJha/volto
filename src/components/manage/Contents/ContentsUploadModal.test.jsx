import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import ContentsUploadModal from './ContentsUploadModal';

const mockStore = configureStore();

describe('ContentsUploadModal', () => {
  it('renders a contents upload modal component', () => {
    const store = mockStore({
      content: {
        create: {
          loading: false,
          loaded: true,
        },
      },
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <ContentsUploadModal
          pathname="/blog"
          open={false}
          onOk={() => {}}
          onCancel={() => {}}
        />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
