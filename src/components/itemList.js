import React from 'react'
import { Link } from '../routes'
import RatingStar from './starRating'

export default function Item({ dataItem, addOrder }) {
  const { id, name, price, images, avgRating } = dataItem
  return (
    <div className="column1">
      <Link route="detail" params={{ id: id }}>
        <h3 className="itemHead">
          <a>{name}</a>
        </h3>
      </Link>
      <img className="imgItem" src={`/static/images/menus/${images}`} alt="" />
      <div className="columnText">
        Rating : &nbsp;
        <RatingStar avgRating={avgRating} />
      </div>
      <div className="columnLink">
        THB {price}
        <span className="order">
          |{' '}
          <a onClick={addOrder(id)} href="javascript:void(0)">
            Order Now
          </a>
        </span>
      </div>
    </div>
  )
}
