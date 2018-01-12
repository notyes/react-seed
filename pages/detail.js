import React from 'react'
import { Link } from '../src/routes'
import withLayout from '../hocs/withLayout'
import { compose } from 'recompose'
import withApolloClient from '../hocs/withApolloClient'

function DetailPage() {
  return (
    <div className="bottom_container">
      <div id="container2">
        <div className="welCome">
          <h2>Head</h2>
        </div>
        {/* column */}
        <div className="welCome">
          <div id="columZone">
            <div className="aboutcolumn1">
              <div>
                <img
                  src="/static/images/menus/chinese_cabbage.jpg"
                  alt=""
                  className="abouticon"
                />
              </div>
            </div>
            <div className="aboutcolumn2">
              <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin
                sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a
                dictum varius,
                <div className="insidereadmore">
                  <a href="#">Read More...</a>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* end column */}
      </div>
      <div className="welCometextBox2">
        <h2>ORDER</h2>
      </div>
    </div>
  )
}

export default compose(withApolloClient, withLayout)(DetailPage)
