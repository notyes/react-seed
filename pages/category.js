import React from 'react'
import withLayout from '../hocs/withLayout'
import withApolloClient from '../hocs/withApolloClient'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import withStore from '../hocs/withStore'

import Item from '../src/components/itemList'
import OrderList from '../src/components/orderList'

function CategoryPage({ data, addOrder, orders, changeOrder }) {
  const { Category, loading } = data

  if (loading == true) {
    return null
  }

  return (
    <div className="bottom_container">
      <div id="container2">
        <div className="welCome">
          <h2>
            <img
              className="cat-img"
              src={`/static/images/categories/${Category.images}`}
            />&nbsp;
            {Category.name}&nbsp;
          </h2>
        </div>
        {/* column */}
        <div className="welCome">
          <div id="columZone">
            {Category.menus.map(function(item) {
              return <Item dataItem={item} key={item.id} addOrder={addOrder} />
            })}
            <div className="clear" />
          </div>
        </div>
        {/* end column */}
      </div>
      <div className="welCometextBox2">
        <div className="orderList">
          <h2>ORDER</h2>
        </div>
        <OrderList orders={orders} changeOrder={changeOrder} />
      </div>
    </div>
  )
}

class CategoryPageContainer extends React.Component {
  addOrder = menu_id => () => {
    const { Category: { menus: menusList } } = this.props.data

    const menuSelect = menusList.find(function(val) {
      if (val.id == menu_id) {
        return val
      }
    })
    this.props.dispatch({
      type: 'ADD_ORDER',
      menuSelect
    })
  }
  changeOrder = menu_id => e => {
    const order_number = e.target.value
    if (order_number == 0) {
      this.props.dispatch({
        type: 'REMOVE_ORDER',
        menu_id
      })
    } else {
      this.props.dispatch({
        type: 'UPDATE_ORDER',
        menu_id,
        select_order: order_number
      })
    }
  }
  render() {
    return (
      <CategoryPage
        data={this.props.data}
        addOrder={this.addOrder}
        orders={this.props.orders}
        changeOrder={this.changeOrder}
      />
    )
  }
}

const QUERY_POSTS = gql`
  query($cat_id: Int!) {
    Category(cat_id: $cat_id) {
      id
      name
      images
      menus {
        name
        price
        images
        id
        avgRating
        category {
          images
        }
      }
    }
  }
`

export default compose(
  withApolloClient,
  withStore,
  withLayout,
  graphql(QUERY_POSTS, {
    options: ({ url: { query: { id } } }) => ({
      variables: {
        cat_id: id
      }
    })
  }),
  connect(({ orders }) => ({
    orders
  }))
)(CategoryPageContainer)
