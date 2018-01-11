import React from 'react'
import { Link } from '../src/routes'
import withLayout from '../hocs/withLayout'

function DetailPage() {
  return (
    <div>
      Detail
      <Link route="home">
        <a>home</a>
      </Link>
    </div>
  )
}
class DetailPageContainer extends React.Component {
  static getInitialProps(context) {
    console.log(context.query.id)
  }
  render() {
    return <DetailPage />
  }
}
export default withLayout(DetailPageContainer)
