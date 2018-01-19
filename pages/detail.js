import React from 'react'
import { Link } from '../src/routes'
import withLayout from '../hocs/withLayout'
import { compose } from 'recompose'
import withApolloClient from '../hocs/withApolloClient'
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import RatingStar from '../src/components/starRating'

class IncreaseStar extends React.Component {
  render() {
    return (
      <div className="rateing-btn">
        <button onClick={this.props.updateStar(1)}>1 Star</button>
        <button onClick={this.props.updateStar(2)}>2 Star</button>
        <button onClick={this.props.updateStar(3)}>3 Star</button>
        <button onClick={this.props.updateStar(4)}>4 Star</button>
        <button onClick={this.props.updateStar(5)}>5 Star</button>
      </div>
    )
  }
}
function DetailPage({ data, submitComment, updateStar }) {
  const { MenuDetail, loading } = data
  if (loading) {
    return null
  }
  const { name, avgRating, comments, images, price, rating } = MenuDetail
  const ratingMul =
    rating.one * 1 +
    rating.two * 2 +
    rating.three * 3 +
    rating.four * 4 +
    rating.five * 5
  const ratingsum =
    rating.one + rating.two + rating.three + rating.four + rating.five
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
              <div className="desc">
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
                  <RatingStar avgRating={avgRating} /> {ratingMul / ratingsum}
                </div>
                <br />
                <div className="Pricedetail">
                  Price :<span> THB {price}</span>
                </div>
              </div>
              <IncreaseStar MenuDetail={MenuDetail} updateStar={updateStar} />
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* end column */}
      </div>

      <div className="welCometextBox2">
        <div className="orderList">
          <h2>Reviews</h2>
        </div>
        <div className="orderList">
          <div className="orderZone">
            <ListReviews comments={comments} />
            <CommentForm submitComment={submitComment} />
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
class CommentForm extends React.Component {
  state = {
    comment: ''
  }
  handleSubmit = event => {
    event.preventDefault()

    this.props.submitComment(this.state.comment)
    this.setState({
      comment: ''
    })
  }
  handleCommentChanged = event => {
    this.setState({
      comment: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Comment :{' '}
        <input
          name="addcomment"
          className="inputcomment"
          value={this.state.comment}
          onChange={this.handleCommentChanged}
        />
      </form>
    )
  }
}
const MutationComment = gql`
  mutation($comment: String!, $menu_id: Int!) {
    addComment(comment: $comment, menu_id: $menu_id) {
      body
      id
    }
  }
`
const MutationRating = gql`
  mutation($menu_id: Int!, $star: Int!) {
    addRateing(menu_id: $menu_id, star: $star) {
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

class DetailPageContainer extends React.Component {
  submitComment = comment => {
    const { query: { id: menu_id } } = this.props.url
    this.props.client.mutate({
      mutation: MutationComment,
      variables: { comment: comment, menu_id: menu_id },
      update: (proxy, { data: { addComment } }) => {
        const query = QUERY_POSTS
        const data = proxy.readQuery({
          query,
          variables: { menu_id }
        })
        data.MenuDetail.comments.push(addComment)
        proxy.writeQuery({ query, data })
      }
    })
  }
  updateStar = star => e => {
    const { query: { id: menu_id } } = this.props.url

    this.props.client.mutate({
      mutation: MutationRating,
      variables: { star, menu_id }
    })
  }
  render() {
    return (
      <DetailPage
        data={this.props.data}
        submitComment={this.submitComment}
        updateStar={this.updateStar}
      />
    )
  }
}

export default compose(
  withApolloClient,
  withLayout,
  withApollo,
  graphql(QUERY_POSTS, {
    options: ({ url: { query: { id } } }) => ({
      variables: {
        menu_id: id
      }
    })
  })
)(DetailPageContainer)
