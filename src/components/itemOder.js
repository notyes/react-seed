import React from 'react'

export default function ItemOrder({ order, changeOrder }) {
  const { id, images, orders, name } = order
  return (
    <div className="servicecolumn1">
      <img
        src={`/static/images/menus/${images}`}
        alt=""
        className="ordericon"
      />
      <div className="orderText">
        <span>{name}</span>
        <br />
        <input
          type="number"
          className="orderNumber"
          value={orders}
          onChange={changeOrder(id)}
        />
      </div>
      <div />
    </div>
  )
}
