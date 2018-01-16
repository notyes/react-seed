import React from 'react'
import { Link } from '../../../src/routes'

export default function Header({ categories }) {
  if (categories == undefined) return null
  return (
    <div id="header">
      <div id="logo">
        <img src="../../../static/images/logo.jpeg" />
      </div>
      <div id="menu2">
        <ul>
          <li>
            <Link route="home">
              <a>Home</a>
            </Link>
          </li>
          {categories.map(function(val) {
            return (
              <li key={val.id}>
                <Link route="category" params={{ id: val.id }}>
                  <a>{val.name}</a>
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
