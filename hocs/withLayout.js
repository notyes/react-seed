import React from 'react'
import MainLayout from '../src/components/layouts/MainLayout'

export default WrappedComponent =>
  class WithLayout extends React.Component {
    static async getInitialProps(ctx) {
      let composedInitialProps = {}
      if (WrappedComponent.getInitialProps) {
        composedInitialProps = await WrappedComponent.getInitialProps(ctx)
      }
      return composedInitialProps
    }
    render() {
      return (
        <MainLayout>
          <WrappedComponent {...this.props} />
        </MainLayout>
      )
    }
  }
