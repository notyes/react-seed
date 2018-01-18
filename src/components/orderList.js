import React from 'react'
import SumPrice from './sumprice'
import ItemOrder from './itemOder'

export default function OrderList({ orders, changeOrder }) {
  return (
    <div className="orderList">
      <div className="orderZone">
        {orders.map(function(order) {
          return (
            <ItemOrder key={order.id} order={order} changeOrder={changeOrder} />
          )
        })}

        <div className="clear" />
        <SumPrice orders={orders} />
      </div>
    </div>
  )
}
