import React from 'react'
import withLayout from '../hocs/withLayout'
import withApolloClient from '../hocs/withApolloClient'
import withStore from '../hocs/withStore'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Item from '../src/components/itemList'
import OrderList from '../src/components/orderList'

function HomePage({ data, addOrder, orders, changeOrder }) {
  const { MenusList, loading } = data

  if (loading == true || MenusList == undefined) {
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

class HomePageContainer extends React.Component {
  addOrder = menu_id => () => {
    // const menusList = this.props.data.MenusList
    const { MenusList: menusList } = this.props.data
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
      <HomePage
        data={this.props.data}
        addOrder={this.addOrder}
        orders={this.props.orders}
        changeOrder={this.changeOrder}
      />
    )
  }
}
const QUERY_POSTS = gql`
  query {
    MenusList {
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
`

export default compose(
  withApolloClient,
  withStore,
  withLayout,
  graphql(QUERY_POSTS),
  connect(({ orders }) => ({
    orders
  }))
)(HomePageContainer)
