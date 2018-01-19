import React from 'react'
import { Provider } from 'react-redux'
import store from '../src/modules/Order/store/OrderStore'

export default WrappedComponent =>
  class WithStore extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      )
    }
  }
