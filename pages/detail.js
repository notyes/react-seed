import React from 'react'
import { Link } from '../src/routes'
import withLayout from '../hocs/withLayout'
import { compose } from 'recompose'
import withApolloClient from '../hocs/withApolloClient'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RatingStar from '../src/components/starRating'

function DetailPage({ data }) {
  const { MenuDetail, loading } = data
  if (loading) {
    return null
  }

  const { name, avgRating, comments, images, price } = MenuDetail
  return (
    <div className="bottom_container">
      <div id="container2">
        <div className="welCome">
          <h2>{name}</h2>
        </div>
        {/* column */}
        <div className="welCome">
          <div id="columZone">
            <div className="aboutcolumn1">
              <div>
                <img
                  src={`/static/images/menus/${images}`}
                  alt=""
                  className="abouticon"
                />
              </div>
            </div>
            <div className="aboutcolumn2">
              <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin
                sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a
                dictum varius, <br />
                <br />Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32.
                <div className="insidereadmore">
                  <a href="#">.....</a>
                </div>
                <div>
                  <RatingStar avgRating={avgRating} />
                </div>
                <br />
                <div className="Pricedetail">
                  Price :<span> THB {price}</span>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* end column */}
      </div>

      <div className="welCometextBox2">
        <div className="orderList">
          <h2>Review</h2>
        </div>
        <div className="orderList">
          <div className="orderZone">
            <ListReviews comments={comments} />
            <div className="clear" />
          </div>
        </div>
      </div>
    </div>
  )
}
function ListReviews({ comments }) {
  return (
    <ul>
      {comments.map(function(comment) {
        return <li key={comment.id}>{comment.body}</li>
      })}
    </ul>
  )
}
const QUERY_POSTS = gql`
  query($menu_id: Int!) {
    MenuDetail(menu_id: $menu_id) {
      id
      name
      images
      rating {
        one
        two
        three
        four
        five
      }
      price
      avgRating
      comments {
        id
        body
      }
    }
  }
`
export default compose(
  withApolloClient,
  withLayout,
  graphql(QUERY_POSTS, {
    options: ({ url: { query: { id } } }) => ({
      variables: {
        menu_id: id
      }
    })
  })
)(DetailPage)
