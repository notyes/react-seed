import React from 'react'
import withLayout from '../hocs/withLayout'
import withApolloClient from '../hocs/withApolloClient'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompose'

import Item from '../src/components/itemList'

function HomePage({ data }) {
  const { MenusList, loading } = data

  if (loading == true) {
    return null
  }
  return (
    <div className="bottom_container">
      <div id="container2">
        <div className="welCome">
          <h2>WELCOME TO OUR FOOD </h2>
        </div>
        {/* column */}
        <div className="welCome">
          <div id="columZone">
            {MenusList.map(function(item) {
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
  query {
    MenusList {
      name
      price
      images
      id
      avgRating
    }
  }
`

export default compose(withApolloClient, withLayout, graphql(QUERY_POSTS))(
  HomePage
)
