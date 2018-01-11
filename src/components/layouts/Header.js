import React from 'react'
import { Link } from '../../../src/routes'

export default function Header({ categories }) {
  return (
    <div id="undefined-sticky-wrapper" className="sticky-wrapper">
      <div className="">
        <div className="container">
          <div className="row">
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link route="home">
                    <a>Home</a>
                  </Link>
                </li>

                {categories.CategoryList.map(function(val) {
                  return (
                    <li key={val.id}>
                      <Link route="detail" params={{ id: val.id }}>
                        <a>{val.name}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
