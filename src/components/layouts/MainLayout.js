import React from 'react'
import styles from './styles'
import Header from './Header'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function Layout({ children, data, url }) {
  const { pathname, query: { id } } = url
  const { CategoryList, loading } = data
  if (loading) {
    return null
  }

  return (
    <div className="wrapper">
      <Header categories={CategoryList} cat_id={id} pathName={pathname} />
      <main>{children}</main>

      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

// class LayoutContainer extends React.Component {
//   render() {
//     console.log(this.props)
//     return <Layout childrens={this.props.children} data={this.props.data} />
//   }
// }

const QUERY_POSTS = gql`
  query {
    CategoryList {
      id
      name
      menus {
        id
      }
    }
  }
`
export default graphql(QUERY_POSTS)(Layout)
// export default Layout
