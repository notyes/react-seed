import React from 'react'
import { Link } from '../routes'

export default function SumPrice({ orders }) {
  let sumprice = 0
  if (orders.length != 0) {
    const reducer = (acc, order) => {
      return acc + parseInt(order.orders) * parseInt(order.price)
    }
    sumprice = orders.reduce(reducer, 0)
  }

  return (
    <div className="sumprice">
      <span>Sumprice : {sumprice}</span>
      <div className="order-btn">
        <Link route="sumorder">
          <button className="button">Order</button>
        </Link>
      </div>
    </div>
  )
}
