import React from 'react'
import MainLayout from '../src/components/layouts/MainLayout'
import fetchGQL from '../utils/fetchGQL'

export default WrappedComponent =>
  class WithLayout extends React.Component {
    static async getInitialProps(context) {
      let composedInitialProps = {}
      if (WrappedComponent.getInitialProps) {
        composedInitialProps = await WrappedComponent.getInitialProps(context)
      }
      let query = `query{
        CategoryList {
          id
          name
        }
      }`
      const categories = await fetchGQL(query)

      return {
        categories,
        ...composedInitialProps
      }
    }
    constructor(props) {
      super(props)
      this.categories = this.props.categories.data
    }
    render() {
      return (
        <MainLayout categories={this.categories}>
          <WrappedComponent {...this.props} />
        </MainLayout>
      )
    }
  }
