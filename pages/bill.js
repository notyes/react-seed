import React from 'react'
import withLayout from '../hocs/withLayout'
import withApolloClient from '../hocs/withApolloClient'
import withStore from '../hocs/withStore'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link, Router } from '../src/routes'

function SumOrderItem({ orders }) {
  if (orders == undefined) return null
  return orders.map(function(order) {
    const sumprice = order.price * order.orders
    return (
      <div className="sumordercolumn1" key={order.id}>
        <img
          src={`/static/images/menus/${order.images}`}
          alt=""
          className="ordericon"
        />
        <div className="sumorderText">
          <div className="spname">
            <span className="sumordername">{order.name}</span>
          </div>
          <div className="sumorderqulity">
            <span>{order.orders}</span>
          </div>
          <div className="sumorderprice">
            <span>{sumprice}</span>
          </div>
        </div>
        <div />
        <div className="clear" />
      </div>
    )
  })
}
function Bill({ orders, onSubmitBill }) {
  let sumprice = 0
  if (orders.length != 0) {
    const reducer = (acc, order) => {
      return acc + parseInt(order.orders) * parseInt(order.price)
    }
    sumprice = orders.reduce(reducer, 0)
  }
  const price_vat = sumprice * 107 / 100
  return (
    <div className="sumPageMain">
      <div className="sumordercolumn1">
        <img src={`/static/images/dummy.png`} alt="" className="ordericon" />
        <div className="sumorderText">
          <span className="headname">Name</span>
          <span className="headqa">Quality</span>
          <span className="headprice">Price</span>
        </div>
        <div />
        <div className="clear" />
      </div>

      <SumOrderItem orders={orders} />
      <div className="sumordercolumn1">
        <img src={`/static/images/dummy.png`} alt="" className="ordericon" />
        <div className="sumorderTextsum">
          <div className="spname">
            <span className="sumordername" />
          </div>
          <div className="sumorderqulity">
            <span>Total order :</span>
          </div>
          <div className="sumorderprice">{orders.length}</div>
        </div>
        <div />
        <div className="clear" />
      </div>
      <div className="sumordercolumn1">
        <img src={`/static/images/dummy.png`} alt="" className="ordericon" />
        <div className="sumorderTextsum">
          <div className="spname">
            <span className="sumordername" />
          </div>
          <div className="sumorderqulity">
            <span>Sum Price :</span>
          </div>
          <div className="sumorderprice">{sumprice}</div>
        </div>
        <div />
        <div className="clear" />
      </div>
      <div className="sumordercolumn1">
        <img src={`/static/images/dummy.png`} alt="" className="ordericon" />
        <div className="sumorderTextsum">
          <div className="spname">
            <span className="sumordername" />
          </div>
          <div className="sumorderqulity">
            <span>Include Vat (7%) :</span>
          </div>
          <div className="sumorderpricevat">{price_vat}</div>
        </div>
        <div />
        <div className="clear" />
      </div>
      {/* <Link route="home"> */}
      <button className="sum-btn" onClick={onSubmitBill}>
        Close
      </button>
      {/* </Link> */}
    </div>
  )
}
class HomePageContainer extends React.Component {
  onSubmitBill = () => {
    Router.pushRoute('home')
    this.props.dispatch({
      type: 'CLEAR_ORDER'
    })
  }
  render() {
    return <Bill orders={this.props.orders} onSubmitBill={this.onSubmitBill} />
  }
}
export default compose(
  withApolloClient,
  withStore,
  withLayout,
  connect(({ orders }) => ({
    orders
  }))
)(HomePageContainer)
