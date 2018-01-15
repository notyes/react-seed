import React from 'react'
import styles from './styles'
import Header from './Header'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function Layout({ children, data }) {
  const { CategoryList, loading } = data
  if (loading) {
    return null
  }
  return (
    <div className="wrapper">
      <Header categories={CategoryList} />
      <main>{children}</main>

      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

const QUERY_POSTS = gql`
  query {
    CategoryList {
      id
      name
    }
  }
`
export default graphql(QUERY_POSTS)(Layout)
// export default Layout
