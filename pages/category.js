import React from 'react'
import withLayout from '../hocs/withLayout'
import withApolloClient from '../hocs/withApolloClient'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompose'

import Item from '../src/components/itemList'

function CategoryPage({ data }) {
  const { Category, loading } = data

  if (loading == true) {
    return null
  }

  return (
    <div className="bottom_container">
      <div id="container2">
        <div className="welCome">
          <h2>{Category.name} </h2>
        </div>
        {/* column */}
        <div className="welCome">
          <div id="columZone">
            {Category.menus.map(function(item) {
              return <Item dataItem={item} key={item.id} />
            })}
            <div className="clear" />
          </div>
        </div>
        {/* end column */}
      </div>
      <div className="welCometextBox2">
        <h2>ORDER</h2>
      </div>
    </div>
  )
}
const QUERY_POSTS = gql`
  query($cat_id: Int!) {
    Category(cat_id: $cat_id) {
      id
      name
      menus {
        name
        price
        images
        id
        avgRating
      }
    }
  }
`

export default compose(
  withApolloClient,
  withLayout,
  graphql(QUERY_POSTS, {
    options: ({ url: { query: { id } } }) => ({
      variables: {
        cat_id: id
      }
    })
  })
)(CategoryPage)
