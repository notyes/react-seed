import React from 'react'
import { Link } from '../../../src/routes'

export default function Header({ categories, cat_id, pathName }) {
  if (categories == undefined) return null
  let active_home = cat_id == undefined ? 'active' : ''

  return (
    <div id="header">
      <div id="logo">
        <img src="../../../static/images/logo.jpeg" />
      </div>
      <div id="menu2">
        <ul>
          <li>
            <Link route="home">
              <a className={active_home}>Home</a>
            </Link>
          </li>
          {categories.map(function(val) {
            const active_cat =
              cat_id == val.id && pathName == '/category' ? 'active' : ''
            return (
              <li key={val.id}>
                <Link route="category" params={{ id: val.id }}>
                  <a className={active_cat}>{val.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="clear" />
    </div>
  )
}
